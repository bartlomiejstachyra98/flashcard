<template>
  <div>
    <form @submit.prevent="saveInput">
      <h3 class="word">{{ words }}</h3>
      <input
        :class="{ invaild: incorrectAnswer === 'true' }"
        type="text"
        id="translation"
        ref="translation"
      />
      <base-button>Dalej</base-button>
      <h4 v-if="incorrectAnswer === 'true'">Podaj właściwą odpowiedź</h4>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["words", "incorrectAnswer"],
  emits: ["check"],
  setup(props, context) {
    const translation = ref("");

    function saveInput() {
      context.emit("check", translation.value.value);
      translation.value.value = "";
    }
    return { saveInput, translation };
  },
};
</script>

<style scoped>
input.invaild {
  border: solid 2px red;
}

form {
  width: 100%;
  display: grid;
  grid-template-columns: 70% 20%;
  grid-gap: 0.5rem;
  justify-content: center;
  grid-template-rows: 3rem 1.5rem;
}
.word {
  grid-column: span 2;
  justify-self: center;
}
h4 {
  grid-column: span 2;
  justify-self: center;
  color: red;
  margin: 0;
}
input {
  height: 1.8rem;
  border-radius: 5px;
  border: none;
  margin: 0 0.3rem;
}
</style>
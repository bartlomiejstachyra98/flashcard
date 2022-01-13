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
      <button>Dalej</button>
      <h2 v-if="incorrectAnswer === 'true'">Podaj właściwą odpowiedź</h2>
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
    }
    return { saveInput, translation };
  },
};
</script>

<style scoped>
input.invaild {
  border-color: red;
}

form {
  display: grid;
  grid-template-columns: 32vw 8vw;
  grid-gap: 0.5rem;
  justify-content: center;
  grid-template-rows: 3rem 1.5rem;
}
.word {
  grid-column: span 2;
  justify-self: center;
}
</style>
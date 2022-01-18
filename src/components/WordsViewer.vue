<template>
  <h1 v-if="!topic">Wybierz temat, aby wyświetlić słowa</h1>
  <div v-if="topic">
    <h1>Słowa w temacie</h1>
    <div class="WordsInTopic">
      <div class="addingWords">
        <form @submit.prevent="AddNewWord">
          <input v-model="newWord.word" type="text" />
          <input v-model="newWord.translation" type="text" />
          <button>Dodaj</button>
        </form>
      </div>
      <div class="DisplayWords" v-for="word in words" :key="word">
        <p>{{ word.word }}</p>
        <p>-</p>
        <p>{{ word.translation }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["topic"],
  data() {
    return {
      newWord: {
        word: "",
        translation: "",
      },
    };
  },
  computed: {
    words() {
      const data = this.$store.getters["words/topics"];
      const topicAndWords = data.find((element) => element.id === this.topic);
      if (topicAndWords) {
        return topicAndWords.words;
      } else {
        return null;
      }
    },
  },
  methods: {
    AddNewWord() {
      this.$store.dispatch("words/addWord", {
        id: this.topic,
        word: {
          word: this.newWord.word,
          translation: this.newWord.translation,
        },
      });
    },
  },
};
</script>

<style scoped>
.WordsInTopic {
  display: flex;
  flex-direction: column;
}
.addingWords {
  display: flex;
}
.DisplayWords {
  display: flex;
}
</style>
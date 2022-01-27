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
      <div class="DisplayWords" v-for="key in wordsData.id" :key="key">
        <p>{{ wordsData.words[key].word }}</p>
        <p>-</p>
        <p>{{ wordsData.words[key].translation }}</p>
        <button @click="deleteWord(key)">Usuń</button>
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
      addedCount: 0,
    };
  },
  computed: {
    wordsData() {
      const data = this.$store.getters["words/topics"];
      const id = [];
      const topicAndWords = data.find((element) => element.id === this.topic);
      for (const a in topicAndWords.words) {
        id.push(a);
      }
      if (topicAndWords) {
        return { words: topicAndWords.words, id: id };
      } else {
        return "";
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
          count: this.addedCount,
        },
      });
    },
    deleteWord(id) {
      this.$store.dispatch("words/deleteWord", {
        wordId: id,
        topicId: this.topic,
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
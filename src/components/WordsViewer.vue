<template>
  <h1 v-if="!topic">Wybierz temat, aby wyświetlić słowa</h1>
  <div class="WordsInTopic" v-if="topic">
    <h1>Słowa w temacie</h1>

    <div class="addingWords">
      <form @submit.prevent="AddNewWord">
        <input
          class="word"
          placeholder="Słowo"
          v-model="newWord.word"
          type="text"
        />
        <input
          class="word"
          placeholder="Tłumaczenie"
          v-model="newWord.translation"
          type="text"
        />
        <base-button>+</base-button>
      </form>
    </div>
    <div class="DisplayWordss">
      <div class="DisplayWords" v-for="key in wordsData.id" :key="key">
        <p class="word">{{ wordsData.words[key].word }}</p>
        <p>-</p>
        <p class="word">{{ wordsData.words[key].translation }}</p>
        <base-button class="fa fa-trash" @click="deleteWord(key)"></base-button>
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
      this.newWord.word = "";
      this.newWord.translation = "";
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
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  align-items: center;
}

.addingWords {
  display: flex;
  margin: 1rem;
  align-items: center;
}
.addingWords button {
  min-width: 2rem;
}
.DisplayWordss {
  overflow: auto;
}
.DisplayWords {
  display: flex;
  margin: 1rem;
  align-items: center;
  font-display: center;
  flex-wrap: nowrap;
  border-bottom: solid 1px black;
  width: auto;
}
.word {
  margin: 1rem;
  width: 10vw;
  min-width: auto;
  text-align: center;
  font-display: center;
}
input {
  min-width: 7rem;
  height: 1.8rem;
  border-radius: 5px;
  border: none;
  margin: 0 0.3rem;
}
.DisplayWordss::-webkit-scrollbar {
  width: 8px;
}

.DisplayWordss::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

.DisplayWordss::-webkit-scrollbar-thumb {
  background-color: #90918e;
  border-radius: 100px;
}
</style>
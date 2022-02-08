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
          maxlength="30"
        />
        <input
          class="word"
          placeholder="Tłumaczenie"
          v-model="newWord.translation"
          type="text"
          maxlength="30"
        />
        <base-button>+</base-button>
      </form>
    </div>
    <div class="DisplayWords">
      <div class="DisplayWord" v-for="key in wordsData.id" :key="key">
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
      if (this.newWord.word === "" || this.newWord.translation === "") {
        return;
      }
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
  align-items: center;
  overflow: auto;
  position: relative;
  height: 100%;
}
.addingWords {
  margin: 1rem;
}
.addingWords button {
  min-width: 2rem;
}
.DisplayWords {
  overflow: auto;
}
.DisplayWord {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  border-bottom: solid 1px black;
  width: auto;
}
.word {
  margin: 1rem;
  width: 10vw;
  min-width: auto;
  text-align: center;
}
input {
  min-width: 7rem;
  height: 1.8rem;
  border-radius: 5px;
  border: none;
  margin: 0 0.3rem;
}
.DisplayWords::-webkit-scrollbar {
  width: 8px;
}
.DisplayWords::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}
.DisplayWords::-webkit-scrollbar-thumb {
  background-color: #90918e;
  border-radius: 100px;
}

@media (max-width: 45rem) {
  .addingWords {
    width: 100%;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  .word {
    width: 30vw;
  }
}
</style>
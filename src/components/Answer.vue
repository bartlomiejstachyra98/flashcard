<template>
  <base-card id="select_topic" v-if="!topic">
    <topic-viewer :addTopic="false" @select-words="selectTopic"></topic-viewer>
  </base-card>

  <base-dialog
    :show="!!finalScore"
    title="Gratulacje! Ukończyłeś lekcje!"
    @close="handleError"
  >
    <p>Twój wynik to: {{ finalScore }}/{{ wordLeft }}</p></base-dialog
  >
  <base-card id="withoutWords" v-if="!!topic && !!words.length == 0">
    <h1>Brak fiszek w wybranym temacie!</h1>
    <base-button @click="redirect">Dodaj Słowa</base-button>
  </base-card>
  <base-card v-if="!!topic && !words.length == 0" id="card">
    <h2 class="title">Podaj tłumaczenie słowa na język angielski</h2>
    <base-item
      class="main"
      :incorrectAnswer="incorrectAnswer"
      :words="displayWord"
      @check="check"
    ></base-item>
    <base-button class="button" @click="showAnswer"
      >Pokaż tłumaczenie</base-button
    >
    <h3 class="translation">{{ answer }}</h3>
    <h2 class="score">Wynik {{ score }}/{{ wordLeft }}:</h2>
  </base-card>
</template>

<script>
import BaseItem from "./Ui/BaseItem.vue";
import BaseDialog from "./Ui/BaseDialog.vue";
import TopicViewer from "./Ui/TopicViewer.vue";

export default {
  components: { BaseItem, BaseDialog, TopicViewer },
  data() {
    return {
      activeWord: 0,
      userTranslation: "",
      finalScore: 0,
      score: 0,
      incorrectAnswer: false,
      answer: "",
      topic: "",
      tip: false,
    };
  },
  computed: {
    words() {
      const words = [];
      const data = this.$store.getters["words/topics"];
      const topicAndWords = data.find((element) => element.id === this.topic);
      for (const word in topicAndWords.words) {
        words.push(topicAndWords.words[word]);
      }
      if (topicAndWords) {
        return words;
      } else {
        return "";
      }
    },
    displayWord() {
      return this.words[this.activeWord].word;
    },
    wordLeft() {
      return this.words.length;
    },
  },
  methods: {
    check(userTranslation) {
      if (
        userTranslation.toUpperCase() ===
        this.words[this.activeWord].translation.toUpperCase()
      ) {
        this.incorrectAnswer = "false";
        this.finalScore = null;
        if (this.tip === false) this.score += 1;
        this.activeWord += 1;
        this.answer = null;
        userTranslation = null;
        this.tip = false;
        if (this.activeWord >= this.words.length) {
          this.activeWord = 0;
          this.finalScore = this.score;
          this.score = 0;
        }
      } else {
        this.incorrectAnswer = "true";
      }
    },
    handleError() {
      this.topic = null;
      this.finalScore = null;
    },
    showAnswer() {
      if (!this.answer) {
        this.tip = true;
        this.answer =
          "Tłumaczenie to: " + this.words[this.activeWord].translation;
      } else {
        this.answer = "";
      }
    },
    selectTopic(topic) {
      this.topic = topic;
    },
    redirect() {
      this.$router.push("/flashcards");
    },
  },
};
</script>

<style scoped>
@media (max-width: 45rem) {
  #select_topic {
    width: 43rem;
  }
}

#select_topic {
  width: 40vw;
  height: 50vh;
}
#card {
  display: grid;
  grid-template-areas:
    "title title"
    "main main"
    "button translation"
    "score score";
  height: 40vh;
  width: 40vw;
  grid-template-columns: 50% 50%;
  grid-row-gap: 1rem;
}
.title {
  grid-area: title;
  align-self: center;
  text-align: center;
  margin-bottom: 0;
}
.main {
  grid-area: main;
  align-self: center;
}
.button {
  grid-area: button;
  align-self: center;
  justify-self: center;
}
.translation {
  grid-area: translation;
  align-self: center;
  justify-self: center;
  margin: 0;
}
.score {
  grid-area: score;
  align-self: center;
  justify-self: center;
}
#withoutWords {
  display: flex;
  height: 100%;
  flex-flow: column;
  align-items: center;
}
@media (max-width: 45rem) {
  #withoutWords {
    width: 100%;
    height: calc(100vh - 5rem);
  }
  #select_topic {
    width: 100%;
    height: 100vh;
  }
  #card {
    width: 100%;
    height: calc(100vh - 5rem);
    display: flex;
    flex-flow: column;
  }
}
</style>
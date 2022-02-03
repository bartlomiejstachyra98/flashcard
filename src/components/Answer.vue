<template>
  <div>
    <base-card id="select_topic" v-if="!topic">
      <topic-viewer
        :addTopic="false"
        @select-words="selectTopic"
      ></topic-viewer>
    </base-card>
  </div>
  <base-dialog
    :show="!!finalScore"
    title="Gratulacje! Ukończyłeś lekcje!"
    @close="handleError"
  >
    <p>Twój wynik to: {{ finalScore }}/{{ wordLeft }}</p></base-dialog
  >
  <div>
    <base-card v-if="!!topic" id="card">
      <h2 class="tittle">Podaj tłumaczenie słowa na język angielski</h2>
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
      <p>{{ x }}</p>
    </base-card>
  </div>
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
    };
  },
  computed: {
    words() {
      const words = [];
      const data = this.$store.getters["words/topics"];
      const topicAndWords = data.find((element) => element.id === this.topic);
      for (const word in topicAndWords.words) {
        words.push(topicAndWords.words[word]);
        console.log(topicAndWords.words[word]);
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
      if (userTranslation === this.words[this.activeWord].translation) {
        this.incorrectAnswer = "false";
        this.finalScore = null;
        this.score += 1;
        this.activeWord += 1;
        this.answer = null;
        userTranslation = null;
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
        this.answer =
          "Tłumaczenie to: " + this.words[this.activeWord].translation;
      } else {
        this.answer = "";
      }
    },
    selectTopic(topic) {
      this.topic = topic;
      console.log(this.topic);
    },
  },
};
</script>

<style scoped>
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
.tittle {
  grid-area: title;
  align-self: center;
  justify-self: center;
  margin-bottom: 0;
}
.main {
  grid-area: main;
  align-self: center;
  justify-self: center;
  width: 100%;
  margin: 0;
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
  padding: 0;
  margin: 0;
}
.score {
  grid-area: score;
  align-self: center;
  justify-self: center;
}
</style>
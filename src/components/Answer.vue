<template>
  <router-view></router-view>
  <base-dialog
    :show="!!finalScore"
    title="Gratulacje! Ukończyłeś lekcje!"
    @close="handleError"
  >
    <p>Twój wynik to: {{ finalScore }}/{{ wordLeft }}</p></base-dialog
  >
  <base-card class="card">
    <h2 class="tittle">Podaj tłumaczenie słowa na język angielski</h2>
    <base-item
      class="main"
      :incorrectAnswer="incorrectAnswer"
      :words="displayWord"
      @check="check"
    ></base-item>
    <button class="button" @click="showAnswer">Pokaż tłumaczenie</button>

    <h3 class="translation" v-if="!!answer">Tłumaczenie to: {{ answer }}</h3>
    <h2 class="score">Wynik {{ score }}/{{ wordLeft }}:</h2>
  </base-card>
</template>



<script>
import BaseCard from "./Ui/BaseCard.vue";
import BaseItem from "./Ui/BaseItem.vue";
import BaseDialog from "./Ui/BaseDialog.vue";
import WORDS_DATA from "../dummy";

import { ref, computed } from "vue";

export default {
  components: { BaseCard, BaseItem, BaseDialog },

  setup() {
    const words = WORDS_DATA;
    const wordLeft = ref(words.length);
    let activeWord = ref(0);
    let score = ref(0);
    const incorrectAnswer = ref("false");
    const finalScore = ref(null);
    const answer = ref(false);

    let displayWord = computed(function () {
      return words[activeWord.value].word;
    });

    function check(userTranslation) {
      if (userTranslation === words[activeWord.value].translation) {
        incorrectAnswer.value = "false";
        finalScore.value = null;
        score.value += 1;
        activeWord.value += 1;
        answer.value = null;
        if (activeWord.value >= words.length) {
          activeWord.value = 0;
          finalScore.value = score.value;
          score.value = 0;
        }
      } else {
        incorrectAnswer.value = "true";
      }
    }

    function handleError() {
      finalScore.value = null;
    }

    function showAnswer() {
      if (!answer.value) {
        answer.value = words[activeWord.value].translation;
      } else {
        answer.value = "";
      }
    }

    return {
      words,
      wordLeft,
      activeWord,
      displayWord,
      score,
      check,
      incorrectAnswer,
      finalScore,
      handleError,
      showAnswer,
      answer,
    };
  },
};
</script>

<style scoped>
.card {
  display: grid;
  grid-template-areas:
    "title title"
    "main main"
    "button translation"
    "score score";
  height: 40vh;
  width: 100%;
}
.tittle {
  grid-area: title;
  align-self: center;
  justify-self: center;
}
.main {
  grid-area: main;
  align-self: center;
  justify-self: center;
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
}
.score {
  grid-area: score;
  align-self: center;
  justify-self: center;
}
</style>
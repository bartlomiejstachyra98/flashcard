<template>
  <body>
    <base-card id="card">
      <div class="flashCard">
        <div class="topicDisplay">
          <topic-viewer
            :addTopic="true"
            @select-words="selectWords"
          ></topic-viewer>
        </div>
        <div class="wordsDisplay">
          <words-viewer :topic="this.topic"></words-viewer>
        </div>
      </div>
    </base-card>
  </body>
</template>
<script>
import TopicViewer from "./Ui/TopicViewer.vue";
import WordsViewer from "./WordsViewer.vue";

export default {
  components: { TopicViewer, WordsViewer },
  data() {
    return {
      topic: "",
    };
  },
  methods: {
    selectWords(topic) {
      this.topic = topic;
    },
  },
};
</script>

<style scoped>
.flashCard {
  display: flex;
  height: 60vh;
  justify-content: center;
  margin: 0;
}
.topicDisplay {
  width: 25%;
  display: flex;
  flex-direction: column;
}

.wordsDisplay {
  width: 75%;
  display: flex;
  justify-content: center;
}
@media (max-width: 45rem) {
  #card {
    width: 100vw;
    height: calc(100vh-5rem);
    overflow: auto;
  }
  .flashCard {
    justify-content: unset;
    flex-flow: column;
    align-items: center;
  }
  .wordsDisplay {
    width: 100%;
  }
  .topicDisplay {
    width: 100%;
  }
}
</style>
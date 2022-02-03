<template>
  <body>
    <base-card>
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
</style>
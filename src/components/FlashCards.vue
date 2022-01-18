<template>
  <body>
    <base-card>
      <div class="flashCard">
        <div class="e1">
          <topic-viewer @select-words="selectWords"></topic-viewer>
        </div>
        <div class="e2">
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
  width: 50vw;
  justify-content: center;
}
.e1 {
  background-color: blue;
  width: 30%;
  display: flex;
  flex-direction: column;
}
.e1 h2 {
  text-align: center;
}
.e2 {
  background-color: red;
  width: 70%;
}
</style>
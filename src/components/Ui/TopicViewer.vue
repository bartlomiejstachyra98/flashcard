<template>
  <h1>Tematy:</h1>
  <div class="topicViever">
    <div class="topic">
      <button
        class="topicButton"
        @click="selectWords(topic.id)"
        v-for="topic in topics"
        :key="topic.id"
      >
        {{ topic.topic }}
      </button>
    </div>
    <div class="addNewTopic">
      <form @submit.prevent="addNewTopic">
        <input type="text" v-model="newTopic" placeholder="Nowy Temat" />
        <button>Dodaj</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTopic: "",
    };
  },
  computed: {
    topics() {
      const data = this.$store.getters["words/topics"];
      const topics = [];
      data.forEach((element) => {
        topics.push({ topic: element.topic, id: element.id });
      });
      return topics;
    },
  },
  methods: {
    selectWords(topic) {
      this.$emit("select-words", topic);
    },
    addNewTopic() {
      this.$store.dispatch("words/addNewTopic", {
        id: new Date().toISOString(),
        newTopic: this.newTopic,
      });
    },
  },
};
</script>

<style scoped>
.topicViever {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 60vh;
}
.addNewTopic {
  justify-items: end;
}
.topic {
  justify-content: start;
  display: flex;
  flex-direction: column;
}
.topicButton {
  height: 2rem;
  margin: 2px;
}
</style>
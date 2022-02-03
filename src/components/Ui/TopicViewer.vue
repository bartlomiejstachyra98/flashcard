<template>
  <div class="topic_viewer">
    <div class="top">
      <h1>Tematy:</h1>
      <div class="topic" v-for="topic in topics" :key="topic.id">
        <button class="topicButton" @click="selectWords(topic.id)">
          <p>{{ topic.topic }}</p>
          <base-button
            v-if="this.addTopic"
            class="fa fa-trash"
            @click="deleteTopic(topic.id)"
          ></base-button>
        </button>
      </div>
    </div>
    <div v-if="this.addTopic" class="addNewTopic">
      <form @submit.prevent="addNewTopic">
        <input type="text" v-model="newTopic" placeholder="Nowy Temat" />
        <base-button>Dodaj</base-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["addTopic"],
  data() {
    return {
      newTopic: "",
    };
  },
  created() {
    if (this.topics.length == 0) {
      this.loadTopics();
    }
  },
  computed: {
    topics() {
      const data = this.$store.getters["words/topics"];
      const topics = [];
      for (const key in data) {
        topics.push({ topic: data[key].topic, id: data[key].id });
      }
      return topics;
    },
  },
  methods: {
    selectWords(topic) {
      this.$emit("select-words", topic);
    },
    addNewTopic() {
      this.$store.dispatch("words/addNewTopic", {
        newTopic: this.newTopic,
      });
    },
    deleteTopic(topicId) {
      this.$store.dispatch("words/deleteTopic", topicId);
    },
    async loadTopics() {
      try {
        await this.$store.dispatch("words/fetchTopics");
      } catch (error) {
        this.error = error.message || "someting went wrong";
      }
    },
  },
};
</script>

<style scoped>
.top {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
}
.topic_viewer {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}
.addNewTopic {
  margin: 0.5rem;
  width: 100%;
  height: 2rem;
}
.addNewTopic form {
  width: 100%;
  display: flex;
  flex-flow: nowrap;
}
.addNewTopic input {
  width: 70%;
  height: 1.8rem;
  border-radius: 5px;
  border: none;
  margin: 0 0.3rem;
}
.addNewTopic button {
  width: 30%;
}
.topic {
  width: 100%;
}
.topicButton {
  background-color: #bfd3c1;
  width: stretch;
  height: 2rem;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  border-radius: 5px;
  border: 2px solid #bfd3c1;
  text-justify: center;
  color: #004e98;
  font-size: 1.1rem;
  padding: 0 0 0 0.5rem;
}
.topicButton:hover {
  background-color: #ffae03;
}

.top::-webkit-scrollbar {
  width: 8px;
}

.top::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

.top::-webkit-scrollbar-thumb {
  background-color: #90918e;
  border-radius: 100px;
}
</style>
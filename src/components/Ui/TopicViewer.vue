<template>
  <div class="topic_viewer">
    <div class="top">
      <h1>Tematy:</h1>
      <div v-if="topics" class="desktop_topicDisplay">
        <div :class="display" v-for="topic in topics" :key="topic.id">
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
      <div class="withoutTopics" v-if="!topics[0]">
        <h4 v-if="this.addTopic">Dodaj nowy temat</h4>
        <button v-if="!this.addTopic" class="topicButton" @click="redirect">
          Dodaj Temat
        </button>
      </div>
      <div class="mobile_topicDisplay">
        <select
          class="topic_select"
          v-if="this.addTopic"
          name="topics"
          @change="selectWords(false)"
          id="topic"
          v-model="selectedTopic"
        >
          <option default>Wybierz Temat</option>
          <option v-for="topic in topics" :key="topic.id" :value="topic.id">
            {{ topic.topic }}
          </option>
        </select>
        <base-button
          v-if="this.addTopic"
          class="fa fa-trash"
          @click="deleteTopic(selectedTopic)"
        ></base-button>
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
      selectedTopic: "Wybierz Temat",
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
    display() {
      if (window.innerWidth < 720 && this.addTopic) {
        return "topic";
      } else {
        return "answer_topicDisplay";
      }
    },
  },
  methods: {
    selectWords(topic) {
      if (topic == false) {
        this.$emit("select-words", event.target.value);
      } else {
        this.$emit("select-words", topic);
      }
    },
    addNewTopic() {
      if (this.newTopic === "") {
        return;
      }
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
    redirect() {
      this.$router.push("flashcards");
    },
  },
};
</script>

<style scoped>
.mobile_topicDisplay {
  display: none;
}
.topic_viewer {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  /* position: relative; */
}
.top {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  /* position: relative; */
  overflow: auto;
}
.desktop_topicDisplay {
  width: 100%;
  overflow: auto;
}
.desktop_topicDisplay::-webkit-scrollbar {
  width: 8px;
}

.desktop_topicDisplay::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

.desktop_topicDisplay::-webkit-scrollbar-thumb {
  background-color: #90918e;
  border-radius: 100px;
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
  border-radius: 5px;
  border: 2px solid #bfd3c1;
  color: #004e98;
  font-size: 1.1rem;
  padding: 0 0 0 0.5rem;
}
.topicButton:hover {
  background-color: #ffae03;
}
.addNewTopic {
  margin: 0.5rem;
  width: 100%;
  height: 2rem;
}
.addNewTopic form {
  display: flex;
  flex-flow: nowrap;
}
.addNewTopic input {
  width: 70%;
  border-radius: 5px;
  border: none;
  margin: 0 0.3rem;
}
.addNewTopic button {
  width: 30%;
}
.withoutTopics {
  width: 100%;
}

@media (max-width: 45rem) {
  .withoutTopics h4 {
    display: none;
  }
  .topic {
    display: none;
    margin: 0 2rem;
  }
  .topic_select {
    height: 2rem;
    border-radius: 5px;
    border: none;
    width: 80%;
    margin: 0 0.5rem;
  }
  .answer_topicDisplay {
    display: unset;
    margin: 0;
  }
  .mobile_topicDisplay {
    display: unset;
    width: 100%;
    margin-bottom: 1rem;
  }

  .mobile_topicDisplay button {
    height: 2rem;
  }

  .addNewTopic button {
    height: 1.8rem;
    width: auto;
  }
  .addNewTopic input {
    margin-left: 0;
    width: 80%;
  }
}
</style>
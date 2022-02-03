export default {
    namespaced: true,
    state() {
        return {
            data: []
        }
    },
    mutations: {
        addTopic(state, payload) {
            state.data = payload;
        },
        addWord(state, payload) {
            for (var i = 0; i < state.data.length; i++) {
                if (state.data[i].id == payload.id2) {
                    //tutaj trzeba jakos dodac words[id].push
                    state.data[i].words[payload.id] = payload.word;
                    state.data[i].words.length++
                }
            }
        },
        // deleteWord(state, payload) {
        //     for (var i = 0; i < state.data.length; i++) {
        //         if (state.data[i].id == payload.topicId) {
        //             console.log(payload)
        //             console.log(state.data[i].words);
        //             state.data[i].words[payload.wordId].remove();
        //         }
        //     }
        //     console.log(state.data);
        // }
    },
    actions: {
        async addNewTopic(context, payload) {
            const newTopic = {
                topic: payload.newTopic,
            };
            const userId = context.rootGetters['auth/userId'];
            const response = await fetch(`https://flashcard-1607b-default-rtdb.europe-west1.firebasedatabase.app/data/${userId}.json?`, {
                method: 'POST',
                body: JSON.stringify(newTopic)
            }).then(setTimeout(() => {
                context.dispatch('fetchTopics')
            }, 200))
            const responseData = await response.json();
            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed fetch requests')
                throw error
            }
            // newTopic.id = responseData.name;
            // newTopic.words = [];
            // console.log(newTopic)
            // context.commit('addTopic', newTopic)

        },
        async fetchTopics(context) {
            const userId = context.rootGetters['auth/userId'];
            const response = await fetch(`https://flashcard-1607b-default-rtdb.europe-west1.firebasedatabase.app/data/${userId}.json?`)
            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed fetch requests')
                throw error
            }
            var data = [];
            var topics = null;
            for (const key in responseData) {
                if (responseData[key].words) {
                    topics = {
                        topic: responseData[key].topic,
                        words: [],
                        id: key
                    }
                    for (const word in responseData[key].words) {
                        topics.words[word] = responseData[key].words[word];
                    }
                } else {
                    topics = {
                        topic: responseData[key].topic,
                        words: [],
                        id: key
                    }
                }
                data.push(topics)
            }
            context.commit('addTopic', data)
        },
        async deleteTopic(context, payload) {
            const userId = context.rootGetters['auth/userId'];
            await fetch(`https://flashcard-1607b-default-rtdb.europe-west1.firebasedatabase.app/data/${userId}/${payload}.json?`, {
                method: 'DELETE'
            }).then(
                setTimeout(() => {
                    context.dispatch('fetchTopics')
                }, 200)
            )
        },
        async addWord(context, payload) {
            const userId = context.rootGetters['auth/userId'];
            const response = await fetch(`https://flashcard-1607b-default-rtdb.europe-west1.firebasedatabase.app/data/${userId}/${payload.id}/words.json?`, {
                method: 'POST',
                body: JSON.stringify(payload.word)
            })
            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed fetch requests')
                throw error
            }
            const newWords = {
                id: responseData.name,
                word: payload.word,
                id2: payload.id
            }
            context.commit('addWord',
                newWords
            )
        },
        async deleteWord(context, payload) {
            const userId = context.rootGetters['auth/userId'];
            await fetch(`https://flashcard-1607b-default-rtdb.europe-west1.firebasedatabase.app/data/${userId}/${payload.topicId}/words/${payload.wordId}.json?`, {
                method: 'DELETE'
            }).then(
                setTimeout(() => {
                    context.dispatch('fetchTopics')
                }, 200)
            )
            // dodac tak jak w smartzmulerze set request i to robic po post i zobacztc czt computed ogarnie i bedzie zmienial
            // context.commit('deleteWord', payload)
        }
    },
    getters: {
        topics(state) {
            return state.data
        },
        topicsLoaded(_, getters) {
            return getters.topics
        }

    }
}
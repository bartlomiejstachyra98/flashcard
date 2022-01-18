export default {
    namespaced: true,
    state() {
        return {
            data: [{
                    id: 1,
                    topic: "losowe",
                    words: [{
                            word: 'Samochód',
                            translation: 'car',
                        },
                        {
                            word: 'Myszka',
                            translation: 'mouse',
                        },
                        {
                            word: 'Kubek',
                            translation: 'cup',
                        },
                        {
                            word: 'Zegarek',
                            translation: 'watch',
                        },
                    ],
                }, {
                    id: 2,
                    topic: "dom",
                    words: [{
                            word: 'Krzesło',
                            translation: 'chair',
                        },
                        {
                            word: 'telewizor',
                            translation: 'tv',
                        },
                        {
                            word: 'pilot',
                            translation: 'remote',
                        },
                        {
                            word: 'żarówka',
                            translation: 'bulb',
                        },
                    ],
                }

            ]
        }
    },
    mutations: {
        addTopic(state, payload) {
            state.data.push(payload);
        },
        addWord(state, payload) {
            for (var i = 0; i < state.data.length; i++) {
                if (state.data[i].id === payload.id) {
                    state.data[i].words.push(payload.word);
                }
            }
        }
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
            })
            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed fetch requests')
                throw error
            }
            context.commit('addTopic', newTopic)

        },
        async fetchTopics(context) {
            const userId = context.rootGetters['auth/userId'];

            const response = await fetch(`https://flashcard-1607b-default-rtdb.europe-west1.firebasedatabase.app/data/${userId}.json?`)
            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed fetch requests')
                throw error
            }
            var topics = null;
            for (const key in responseData) {
                if (responseData[key].words) {
                    topics = {
                        topic: responseData[key].topic,
                        words: responseData[key].words,
                        id: key
                    }
                } else {
                    topics = {
                        topic: responseData[key].topic,
                        words: [],
                        id: key
                    }
                }
                context.commit('addTopic', topics)
            }
        },
        addWord(context, payload) {
            context.commit('addWord', payload)
        }
    },
    getters: {
        topics(state) {
            return state.data
        }
    }
}
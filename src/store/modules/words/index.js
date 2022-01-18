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
        addNewTopic(context, payload) {
            const newTopic = {
                id: payload.id,
                topic: payload.newTopic,
                words: [],
            };
            context.commit('addTopic', newTopic)
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
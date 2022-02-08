export default {
    namespaced: true,
    state() {
        return {
            userId: null,
            token: null,
        }
    },
    mutations: {
        setUser(state, payload) {
            state.token = payload.token;
            state.userId = payload.userId;
        }
    },
    actions: {
        async login(context, payload) {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPm0kdX7ivPLzQG5W6jU0AZ3sYedVPApo', {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true,
                })
            })
            const responseData = await response.json();
            if (!response.ok) {
                const error = new Error(responseData.message);
                throw error
            }

            localStorage.setItem('token', responseData.idToken);
            localStorage.setItem('userId', responseData.localId);

            context.commit('setUser', {
                token: responseData.idToken,
                userId: responseData.localId,
            })
        },
        async register(context, payload) {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPm0kdX7ivPLzQG5W6jU0AZ3sYedVPApo', {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true,
                })
            })
            const responseData = await response.json();
            if (!response.ok) {
                const error = new Error(responseData.message);
                throw error
            }

            context.commit('setUser', {
                token: responseData.idToken,
                userId: responseData.localId,
            })

            localStorage.setItem('token', responseData.idToken);
            localStorage.setItem('userId', responseData.localId);

        },
        logout(context) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId')

            context.commit('setUser', {
                token: null,
                userId: null,
            })
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        },
        token(state) {
            return state.token
        },
        isAuthenticated(state) {
            return !!state.token
        }
    },

}
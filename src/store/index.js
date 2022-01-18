import {
    createStore
} from 'vuex';
import auth from './modules/auth/index.js';
import words from './modules/words/index.js'
const store = createStore({
    modules: {
        auth: auth,
        words: words
    }
});

export default store;
import {
    createApp
} from 'vue'
import App from './App.vue'
import {
    router
} from './router'
import store from './store/index.js';
import BaseCard from './components/Ui/BaseCard.vue'
const app = createApp(App);
app.component('base-card', BaseCard);
app.use(store);
app.use(router);
app.mount('#app')
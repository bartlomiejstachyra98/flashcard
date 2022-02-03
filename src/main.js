import {
    createApp
} from 'vue'
import App from './App.vue'
import {
    router
} from './router'
import store from './store/index.js';
import BaseCard from './components/Ui/BaseCard.vue'
import BaseButton from "./components/Ui/BaseButton.vue";
const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.use(store);
app.use(router);
app.mount('#app')
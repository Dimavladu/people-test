import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.sass'
import './assets/tailwind.sass'
import router from "./router"
import vClickOutside from "click-outside-vue3"
import {createPinia} from "pinia"

const pinia = createPinia()
const app = createApp(App)

app
    .use(pinia)
    .use(router)
    .use(vClickOutside)
    .mount('#app')

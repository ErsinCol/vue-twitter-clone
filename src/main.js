import { createApp } from 'vue'
import "@/style.css"
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import App from '@/App.vue'
import router from '@/routes/index.js'
import { createPinia } from 'pinia'
import {DynamicScroller, DynamicScrollerItem} from "vue-virtual-scroller";
import BaseIcon from "@/components/BaseIcon.vue";

const pinia = createPinia()
const app = createApp(App)

app.component('DynamicScroller', DynamicScroller)
app.component('DynamicScrollerItem', DynamicScrollerItem)
app.component('BaseIcon', BaseIcon)

app.use(pinia)
app.use(router)
app.mount('#app')

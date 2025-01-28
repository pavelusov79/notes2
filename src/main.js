import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import './assets/css/all.min.css'
import routers from './routes'

const app = createApp(App)
app.use(routers)
app.mount('#app')

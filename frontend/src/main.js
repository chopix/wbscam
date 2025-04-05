
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios'
import '@/assets/css/tailwind.css'
import '@/assets/css/null.css'

const app = createApp(App)
app.use(router)


axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['Accept'] = 'application/json'
axios.defaults.headers['ngrok-skip-browser-warning'] = '123123123'

app.mount('#app')

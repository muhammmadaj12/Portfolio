/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

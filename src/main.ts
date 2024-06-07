
// FILE: main.js

import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

import router from './router/index.ts'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {
    Notify
    }, 
    config: {
      
    }// import Quasar plugins and add here
})
.use(router)
// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')

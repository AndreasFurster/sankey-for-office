
import './lib/Office/MicrosoftAjax'
import './lib/Office/1/office'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// The initialize function must be run each time a new page is loaded
Office.initialize = function (reason) {
    
};

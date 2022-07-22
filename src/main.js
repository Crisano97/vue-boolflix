import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar);
Vue.component('font-awesome.icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  components: { App },
  template: <App/>,
  render: h => h(App),
}).$mount('#app')

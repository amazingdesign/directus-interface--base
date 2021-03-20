import Vue, { VNode } from 'vue'

import Main from './Main.vue'

Vue.config.productionTip = false

new Vue({
  render: (h): VNode => h(Main),
}).$mount('#app')

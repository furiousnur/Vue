import Vue from 'vue'
import App from './App.vue'
import DemoComponent from './Components/layouts/Demo'

Vue.config.productionTip = false

Vue.component('demo-component', DemoComponent);

new Vue({
  render: h => h(App),
}).$mount('#app')

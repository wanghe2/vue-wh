// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';             //引入element-ui组件
import 'element-ui/lib/theme-chalk/index.css';  //element-ui组件的样式需要单独引入
import store from '@/store'
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

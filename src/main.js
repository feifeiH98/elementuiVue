import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/fonts/iconfont.css'

Vue.use(ElementUI);
// 导入全局样式表
import './assets/global.css'

// 配置请求的路径
Vue.prototype.$http = axios
// 本机地址
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 远程后台地址
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

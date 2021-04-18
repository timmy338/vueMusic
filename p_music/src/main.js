import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';
import axios from 'axios'

//Vue.use(axios)  // 注意 这样的用法是有问题的，axios不支持Vue.use()的声明方式
Vue.prototype.$ajax = axios
// 只是import进来是无法使用 axios 命令的。所以我们将 axios 改写为 Vue 的原型属性。那么在其他组件中就能使用$ajax方法了


Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()


Vue.use(ElementUI);



new Vue({
  el: '#app',
  router,
  render: h => h(App)
});


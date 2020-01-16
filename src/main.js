import 'default-passive-events'
import "core-js/stable"
import "regenerator-runtime/runtime"
import '@/assets/css/index.css'
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "./router"
import store from './store'
import ElementUI from "@/assets/js/elementConfig"

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css'
import {
    Message
} from 'element-ui'

Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.prototype.$message = Message;
Vue.config.productionTip = false  // 去掉vue打印提示

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

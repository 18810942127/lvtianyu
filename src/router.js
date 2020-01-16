import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/report',
            name: 'report',
            component: () => import('./pages/report/list.vue'),
            meta: {
                title: '',
                fid: 'report'
            }
        },
        {
            path: '*',
            name: 'report',
            redirect: '/report',
            meta: {
                title: '',
                fid: 'report'
            }
        }
    ]
})

export default router
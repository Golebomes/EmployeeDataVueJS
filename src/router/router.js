import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Onco from "@/view/Onco";
import Error from "@/view/Error";
import EmployeeData from "@/store/modules/EmployeeData";
Vue.use(Router)



export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Onco,
            name: 'onco',
            beforeEnter: (to,from,next) => {
                if (EmployeeData.state.isAuthorized) {
                    next();
                } else {
                    next({name: 'login'})
                }
            }
        },
        {
            path: '/login',
            component: Login,
            name: 'login'
        },
        {
            path: '*',
            component: Error
        }
    ]
})

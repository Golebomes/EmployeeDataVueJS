import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Onco from "@/view/Onco";
import Error from "@/view/Error";
import EmployeeData from "@/store/modules/EmployeeData";
import Settings from "@/view/Settings";
import Control from "@/components/user/Control";
import MainPage from "@/view/MainPage";

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Onco,
            name: 'onco',
            beforeEnter: (to, from, next) => {
                if (EmployeeData.state.isAuthorized || sessionStorage.getItem('isSignIn')) {
                    next();
                } else {
                    next({name: 'login'})
                }
            },
            children: [
                {
                    path: 'settings',
                    component: Settings,
                },
                {
                    path: 'control',
                    component: Control,
                },
                {
                    path: 'main',
                    component: MainPage,
                }
            ]
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

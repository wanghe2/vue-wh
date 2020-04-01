import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainMenu from '@/components/Main'
import RightMenu from '@/components/RightMenu'
import Role from '@/view/Role'
import Authority from '@/view/Authority'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'mainpage',
      component: MainMenu,
      children:[{
        path:'elc/:id',
        name:'elc',
        component:RightMenu
      },{
        path:'/role',
        name:'role',
        component:Role
      },{
        path:'authortity',
        name:'authortity',
        component:Authority
      }]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainMenu from '@/components/Main'
import RightMenu from '@/components/RightMenu'
import Role from '@/view/Role'
import Authority from '@/view/Authority'
import store from '../store'

Vue.use(Router)

const router=new Router({
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

router.beforeEach((to, from, next) => {
  const userId = store.state.login.userId
  console.log("当前用户："+userId)
  const LOGIN_PAGE_NAME = 'login'
  if (userId == 'null' && to.name != LOGIN_PAGE_NAME) {
    next({
      name: LOGIN_PAGE_NAME
    })
  } else if (userId != 'null' && to.name == LOGIN_PAGE_NAME) {
    next({
      name: 'mainpage'
    })
  } else {
    next()
  }
})
router.afterEach(to => {
  window.scrollTo(0, 0)
})

export default router
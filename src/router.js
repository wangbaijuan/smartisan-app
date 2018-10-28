import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
// import Category from './views/Category.vue'
// import Cart from './views/Cart.vue'
// import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Index.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: ()=> import('./views/Category.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: ()=> import('./views/Cart.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: ()=> import('./views/Profile.vue')
    },
    {
      path: '/detail/:id',
      component: ()=> import('./views/ProductDetail.vue')
    },
    {
      path: '/login',
      component: ()=> import('./views/Login.vue')
    },
  ]
})

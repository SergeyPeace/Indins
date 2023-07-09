import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import CartPage from '../pages/CartPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/:id',
    name: 'cart',
    component: CartPage
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

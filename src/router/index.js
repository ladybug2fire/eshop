import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/pages/home'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Profile from '@/pages/profile'
import Favorite from '@/pages/favorite'
import Orderlist from '@/pages/orderlist'
import Detail from '@/pages/detail'
import Newpost from '@/pages/newpost'
import FavorDetail from '@/pages/favordetail'
import Shop from '@/pages/shop'
import MenusList from '@/pages/menulist'
import ShopCart from '@/pages/shopcart'
import Order from '@/components/order/OrderItem'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      beforeEnter: (to, from, next) => {
        next()
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        }, {
          path: 'profile',
          name: 'profile',
          component: Profile
        }, {
          path: 'favorite',
          name: 'favorite',
          component: Favorite
        }, {
          path: 'orderlist',
          name: 'orderlist',
          component: Orderlist
        }, {
          path: 'detail',
          name: 'detail',
          component: Detail
        }, {
          path: 'newpost',
          name: 'newpost',
          component: Newpost
        }, {
          path: 'shop',
          name: 'shop',
          component: Shop
        }, {
          path: 'favordetail',
          name: '菜单详情',
          component: FavorDetail
        }, {
          path: 'menus',
          name: '美食菜单',
          component: MenusList
        }, {
          path: 'shopcart',
          name: '购物车',
          component: ShopCart
        }, {
          path: 'order',
          name: '购物车',
          component: Order
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, 
  ]
})

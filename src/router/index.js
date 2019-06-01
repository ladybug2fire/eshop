import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Profile from '@/components/user/ProfileCard'
import EditProfile from '@/pages/profile'
import Orderlist from '@/pages/orderlist'
import Detail from '@/pages/detail'
import Shop from '@/pages/shop'
import ShopCart from '@/pages/shopcart'
import Order from '@/components/order/OrderItem'
import Discover from '@/pages/discover'
import Cat from '@/pages/cat'
import Reviewlist from '@/pages/reviewlist'
import Publish from '@/components/media/publish'
import MediaDetail from '@/components/media/mediaDetail'
import homepage from '@/components/media/homepage'
import follow from '@/components/user/follow'
import Search from '@/pages/search'
import ReviewEdit from '@/pages/reviewedit'
import Buy from '@/pages/buy'
import AddressEdit from '@/pages/address/edit'
import AddressList from '@/pages/address/list'
import MyFavor from '@/pages/myfavor'
import store from '@/stores/index'
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
          component: Shop,
        }, {
          path: 'profile',
          name: 'profile',
          beforeEnter: (to, from, next) => {
            next()
            if(store.getters.userid){
              next()
            }else{
              next('/login')
            }
          },
          component: Profile
        }, {
          path: 'profile/orderlist',
          name: 'orderlist',
          beforeEnter: (to, from, next) => {
            next()
            if(store.getters.userid){
              next()
            }else{
              next('/login')
            }
          },
          component: Orderlist
        },{
          path: 'shop',
          name: 'shop',
          component: Shop
        },{
          path: 'cat',
          name: '分类',
          component: Cat
        }, {
          path: 'shopcart',
          name: '购物车',
          component: ShopCart
        }, {
          path: 'order',
          name: '购物车',
          component: Order
        }, {
          path: 'discover',
          name: '发现',
          component: Discover,
        },
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
    },{
      path: '/home/detail',
      name: 'detail',
      component: Detail
    },{
      path: '/review/edit',
      name: 'editreview',
      component: ReviewEdit
    },{
      path: '/profile/edit',
      name: 'editprofile',
      beforeEnter: (to, from, next) => {
        next()
        if(store.getters.userid){
          next()
        }else{
          next('/login')
        }
      },
      component: EditProfile,
    },{
      path: '/discover/homepage',
      name: '个人',
      component: homepage
    },{
      path: '/discover/detail',
      name: '详情',
      component: MediaDetail
    },{
      path: '/follow',
      name: 'follow',
      component: follow
    },{
      path: '/discover/publish',
      name: '发布文章',
      component: Publish
    },{
      path: '/search',
      name: 'search',
      component: Search
    },{
      path: '/review',
      name: '评论列表',
      component: Reviewlist
    },{
      path: '/buy',
      name: '购买',
      component: Buy
    },
    {
      path: '/address',
      name: '地址列表',
      component: AddressList
    },
    {
      path: '/address/edit',
      name: '地址编辑',
      component: AddressEdit
    },
    {
      path: '/myfavor',
      name: '我的收藏',
      component: MyFavor
    }
  ]
})

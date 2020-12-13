import Vue from 'vue'
import Router from 'vue-router'

import store from '../store/index'



const login =()=>import('../pages/login/login')
const index =()=>import('../pages/index/index')
const home =()=>import('../pages/home/home')
const manger =()=>import('../pages/manger/manger')
const role =()=>import('../pages/role/role')
const spec =()=>import('../pages/spec/spec')
const goods =()=>import('../pages/goods/goods')
const banner=()=>import('../pages/banner/banner')
const menu =()=>import('../pages/menu/menu')
const vip =()=>import('../pages/vip/vip')
const seckill =()=>import('../pages/seckill/seckill')
const classify =()=>import('../pages/classify/classify')


Vue.use(Router)

 export const indexRouter =[
  {
    path:'menu',
    component:menu,
    name:'菜单管理'
  },
  {
    path:'role',
    component:role,
    name:'角色管理',
    beforeEnter:(to,from,next)=>{
        if(from.path=='/index/home'){
             next()
        }else{
           next('/login')
        }
    }
  },
  {
    path:'manger',
    component:manger,
    name:'管理员管理'
  },
  {
    path:'classify',
    component:classify,
    name:'商城分类'
  },
  {
    path:'spec',
    component:spec,
    name:'商品规格'
  },
  {
    path:'goods',
    component:goods,
    name:'商品管理'
  },
  {
    path:'vip',
    component:vip,
    name:'会员管理'
  },
  {
    path:'banner',
    component:banner,
    name:'轮播图管理'
  },
  {
    path:'seckill',
    component:seckill,
    name:'秒杀'
  },
  
]




 const router =  new Router({
  routes: [
    {
      path:'/login',
      component:login
    },
    {
      path:'/index',
      component:index,
      children:[
      {
        path:'home',
        component:home,
        beforeEnter:(to,from,next)=>{
            if(from.path=='/login'&&store.state.user.list){
              next()
            }else{
              next('/login')
            }
        }
      },
      {
        path:'/',
        redirect:'home'
      },
      ...indexRouter
      ]
    },
    // {
    //   path:'/',
    //   component:login
    // },
    {
      path:'*',
      redirect:login
    }
   
  ]
})

router.beforeEach((to,from,next)=>{
    if(to.path=='/login'){
      next()
    }


    if(store.state.user.list.menus){
      next()
    }else{
      // this.$router.push('/login')
      // next('/login')
    }
})


export  default  router

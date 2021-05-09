import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path:"/home",
    name:'Home',
    component:()=>import('@/views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  // to表示将要方位的路径
  // from 表示从哪个路径跳转过来
  // next表示放行，next('/login')强制跳转
  if(to.path==='/login') return next();
  // 获取token
  const tokenStr=window.sessionStorage.getItem('token');
  if(!tokenStr) return next('/login')
  next()
})
export default router

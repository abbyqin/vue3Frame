import { createRouter, createWebHashHistory } from "vue-router"
import Home from '@/pages/Home/HomeIndex.vue'
import About from '@/pages/About/AboutIndex.vue'
import Reg from '@/pages/Reg/RegIndex.vue'
import User from '@/pages/User/UserIndex.vue'

const routes = [
  {
    path: '/:chapters*',
    component: Home,
    name: 'chapters'
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/reg/:chapters+',
    component: Reg,
  },{
    path: '/user/:username',
    component: User
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router;

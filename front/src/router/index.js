import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Cadastro from "../views/Cadastro.vue"
import NotFound from '../views/NotFound.vue'
import Listagem from '../views/Listagem.vue'

const routes = [
  {
    path:'/',
    name: 'Login',
    component: Login
  },
  {
    path:'/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path:'/listagem',
    name: 'Listagem',
    component: Listagem
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

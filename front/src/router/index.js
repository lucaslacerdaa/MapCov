import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Cadastro from "../views/Cadastro.vue"
import Listagem from '../views/Listagem.vue'
import NotFound from '../views/NotFound.vue'
import InsertPost from "../views/InsertPost.vue";

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
    path:'/inserirPaciente',
    name: 'InsertPost',
    component: InsertPost
  },

  {
    path:'/listagem',
    name: 'Listagem',
    component: Listagem
  },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

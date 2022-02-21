import Vue from 'vue'
import VueRouter from 'vue-router'
import Connect from "../views/Connect.vue"
import Home from "@/views/Home.vue"

Vue.use(VueRouter)

const routes = [

  {
    path: '/connect',
    name: 'Connect',
    component: Connect
  },

  {
    path: "/home",
    name: "Home",
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

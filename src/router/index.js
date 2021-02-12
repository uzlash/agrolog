import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "About" */ '../views/About.vue'),
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () =>
      import(/* webpackChunkName: "Activity" */ '../views/Activities.vue'),
  },
  {
    path: '/partner',
    name: 'Partner',
    component: () =>
      import(/* webpackChunkName: "Partner" */ '../views/Partners.vue'),
  },
  {
    path: '/net',
    name: 'Net',
    component: () => import(/* webpackChunkName: "Net" */ '../views/Nets.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "Contact" */ '../views/Contact.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import King from '../views/King.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
	meta:{
		tc:true
	}
  },
  {
    path: '/king/:id',
    name: 'king',
    component: King,
	meta:{
		tc:false
	}
  },
  {
    path: '/about',
    name: 'about',
	meta:{
		tc:true
	},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	
  }
]

const router = new VueRouter({
  routes
})

export default router

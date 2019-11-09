import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import King from '../views/King.vue'
import ShopCar from '../views/ShopCar.vue'
import Phoneinfo from '../views/Phoneinfo.vue'
import My from '../views/My.vue'
import Log from '../views/Log.vue'

Vue.use(VueRouter)



const routes = [

  {
    path: '/shopcar',
    name: 'shopcar',
    component: ShopCar,
	meta:{
		tc:true
	}
  },
  {
    path: '/my',
    name: 'my',
    component: My,
  	meta:{
  		tc:true
  	}
  },
  {
    path: '/phoneinfo/:id',
    name: 'phoneinfo',
    component: Phoneinfo,
  	meta:{
  		tc:false
  	}
  },
  {
    path: '/log',
    name: 'log',
    component: Log,
  	meta:{
  		tc:false
  	}
  },
	
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
	
  },

]

const router = new VueRouter({
  routes
})

export default router

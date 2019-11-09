import Vue from 'vue'
import Vuex from 'vuex'

import Cookie from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  flag:true,
	  goods:[]
  },
  getters:{
  	  getlog(state){
  		  return state.flag||Cookie.get("islog");
  	  }
  },
  mutations: {
	  getbush(state,log){
		  state.flag=log
		  if(log){
			  Cookie.set("islog",true)
		  }
		  else{
			  Cookie.remove("islog")
		  }
	  }
  },
  actions: {
  },
  modules: {
  }
})

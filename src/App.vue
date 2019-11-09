<template>
  <div id="app">
	    <router-view/>
	  <van-tabbar v-model="active1" v-show="this.$route.meta.tc== true ">
	  	<van-tabbar-item to="/about" icon="home-o">首页</van-tabbar-item>
	  	<van-tabbar-item to="/" icon="todo-list-o">分类</van-tabbar-item>
	  	<van-tabbar-item to="/shopcar" icon="cart-o">购物车</van-tabbar-item>
	  	<van-tabbar-item to="/my" icon="contact">我的</van-tabbar-item>
	  </van-tabbar>
    </div>
   
</template>


<script>
	import Vue from 'vue';
	import { Tabbar, TabbarItem } from 'vant';
	Vue.use(Tabbar).use(TabbarItem);
	export default{
		data(){
		return {
			active1: 0
			}
		}
	}
	
	
	
	
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

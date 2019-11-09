<template>
	<div>
		<div v-show="!this.$store.getters.getlog">
			<p v-for="item in this.$store.state.goods">{{item.name}}</p>
		</div>
		
		<div>
			<van-nav-bar title="购物车"  left-arrow>
				<van-icon name="arrow-left" slot="left" />
			  <van-icon name="search" slot="right" />
			</van-nav-bar>
		</div>
		<div class="go" @click="go" v-show="this.$store.getters.getlog">
			<span>登录后享受更多优惠</span>
			<span id="wde">去登录></span>
		</div>
		<van-image
		  width="100%"
		  height="80"
		  :src="car.data.header.body.items[0].img_url"
		/>
		<div >
			<van-row type="flex" justify="space-around">
			  <van-col span="12">
				  <van-image
				    @click="goto(car.data.recom_list[0].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[0].image_url"
				  />
				  <p>{{car.data.recom_list[0].name}}</p>
				  <p>{{car.data.recom_list[0].price}}</p>
			  </van-col>
			  <van-col span="12">
				  <van-image
				  @click="goto(car.data.recom_list[1].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[1].image_url"
				  />
				  <p>{{car.data.recom_list[1].name}}</p>
				  <p>{{car.data.recom_list[1].price}}</p>
			  </van-col>
			</van-row>
		</div>
		<div >
			<van-row type="flex" justify="space-around">
			  <van-col span="12">
				  <van-image
				  @click="goto(car.data.recom_list[2].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[2].image_url"
				  />
				  <p>{{car.data.recom_list[2].name}}</p>
				  <p>{{car.data.recom_list[2].price}}</p>
			  </van-col>
			  <van-col span="12">
				  <van-image
				  @click="goto(car.data.recom_list[3].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[3].image_url"
				  />
				  <p>{{car.data.recom_list[3].name}}</p>
				  <p>{{car.data.recom_list[3].price}}</p>
			  </van-col>
			</van-row>
		</div>
		<div >
			<van-row type="flex" justify="space-around">
			  <van-col span="12">
				  <van-image
				  @click="goto(car.data.recom_list[4].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[4].image_url"
				  />
				  <p>{{car.data.recom_list[4].name}}</p>
				  <p>{{car.data.recom_list[4].price}}</p>
			  </van-col>
			  <van-col span="12">
				  <van-image
				  @click="goto(car.data.recom_list[5].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[5].image_url"
				  />
				  <p>{{car.data.recom_list[5].name}}</p>
				  <p>{{car.data.recom_list[5].price}}</p>
			  </van-col>
			</van-row>
		</div>
		<div @click="goto">
			<van-row type="flex" justify="space-around">
			  <van-col span="12">
				  <van-image
				  @click="goto(car.data.recom_list[6].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[6].image_url"
				  />
				  <p>{{car.data.recom_list[6].name}}</p>
				  <p>{{car.data.recom_list[6].price}}</p>
			  </van-col>
			  <van-col span="12">
				  <van-image
				  @click="goto(car.data.recom_list[7].name)"
				    width="90%"
				    height="150"
				    :src="car.data.recom_list[7].image_url"
				  />
				  <p>{{car.data.recom_list[7].name}}</p>
				  <p>{{car.data.recom_list[7].price}}</p>
			  </van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
	import {gos} from '../data.js'
	export default{
		data(){
			return{
				car:gos
			}
		},
		methods: {
		    onClickLeft() {
		      Toast('返回');
		    },
		    onClickRight() {
		      Toast('按钮');
		    },
			go(){
				this.$router.push("/log")
			},
			goto(id){
				this.$router.push(`/phoneinfo/${id}`)
			}

		  }
	}
</script>

<style lang="less">
.go{
	width: 100%;
	background-color: papayawhip;
	height: 50px;
	span{
		position: relative;
		top: 12px;
		left: -120px;
	}
	#wde{
		position: relative;
		top: 12px;
		left: 100px;
	}
}
</style>

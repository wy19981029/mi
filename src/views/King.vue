<template>
	<div >
		<h1>{{this.$route.params.id}}</h1>
		<van-goods-action>
		  <van-goods-action-icon icon="chat-o" text="首页" @click="gohome" />
		  <van-goods-action-icon icon="cart-o" text="购物车" />
		  <van-goods-action-button type="danger" text="立即预约"/>
		</van-goods-action>
		<van-swipe :autoplay="3000">
		  <van-swipe-item v-for="(item, index) in letme.data.goods_info[0].gallery_v3 " >
		    <img :src="item.img_url" style="width: 100%;" />
		  </van-swipe-item>
		</van-swipe>
		<van-icon name="arrow-left"  @click="honm" size=50px />
		<div class="bkg">
			<div>预支付100$</div>
			<span>
				<van-count-down
				  :time="time"
				  format="DD 天 HH 时 mm 分 ss 秒"
				/>
			</span>
		</div>
	</div>
</template>

<script>
import {letme} from '../data.js'
export default{
	data(){
		return{
			letme:letme,
			time: 30 * 60 * 60 * 1000
		}
	},
	methods:{
		gohome(){
			this.$router.push('/about')
		},
		honm(){
			this.$router.go(-1)
		},
		
	}
}
</script>

<style>
	.bkg{
		width: 100%;
		height: 50px;
		background-color: #D5222B;
	}
	.bkg div{
			
	}
	.bkg span{
		color: white;
	}
</style>

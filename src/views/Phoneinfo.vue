<template>
	<div>
		<van-nav-bar
		  
		  left-text=""
		  right-text="按钮"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		/>
		<van-swipe :autoplay="300000">
		  <van-swipe-item v-for="(item, index) in bata.goods_share_datas.gallery_view" :key="index">
		    <img :src="item.img_url_webp"  />
		  </van-swipe-item>
		</van-swipe>
		<div>
			<div class="this">
				<van-cell is-link @click="showPopup" >处理器</van-cell>
				<van-popup v-model="show">骁龙855+ <br> 最高2.96GHz <br> </van-popup>
				<van-popup
				  v-model="show"
				  position="bottom"
				  :style="{ height: '80%' }"
				/>
			</div>
			<div class="this">
				<van-cell is-link @click="showPopup" >三摄像头</van-cell>
				<van-popup v-model="show">内容</van-popup>
				<van-popup
				  v-model="show"
				  position="bottom"
				  :style="{ height: '80%' }"
				/>
			</div>
			<div class="this">
				<van-cell is-link @click="showPopup" >超大寸</van-cell>
				<van-popup v-model="show">内容</van-popup>
				<van-popup
				  v-model="show"
				  position="bottom"
				  :style="{ height: '80%' }"
				/>
			</div>
			<div class="this">
				<van-cell is-link @click="showPopup" >屏幕分辨率</van-cell>
				<van-popup v-model="show">内容</van-popup>
				<van-popup
				  v-model="show"
				  position="bottom"
				  :style="{ height: '80%' }"
				/>
			</div>
		</div>
	<div class="zi">
			<h3>商品名称:{{this.$route.params.id}}</h3>
			<p>{{bata.product_info.product_desc}}</p>
		</div>
		<van-goods-action>
		  <van-goods-action-icon icon="wap-home-o" text="首页" @click="onClickIcon" />
		  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
		  <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
		</van-goods-action>
	</div>
	
</template>

<script>
	import {fker} from '../data.js'
	export default{
		data() {
		    return {
				bata:fker.data,
				 show: false
		    }
		  },
		methods: {
		    showPopup() {
		      this.show = true;
		    },
			 onClickLeft() {
			      this.$router.go(-1);
			    },
			    onClickRight() {
			      Toast('按钮');
			    },
			onClickIcon() {
			      console.log("+++")
			    },
			    onClickButton() {
					if(this.$store.getters.getlog){
						this.$router.push('/log')
					}
					else{
						this.$store.state.goods.push({
							name:this.$route.params.id
						})
					}
				
			      
			    }	
		  }  
	}
</script>

<style>
	.zi{
		position: relative;
		top: 30px;
	}
	h3{
		position: relative;
		left: -80px;
	}
	.this{
		display: inline-block;
		float: left;
		width: 100px;
	}
	img{
		width: 100%;
	}
	p{
		position: relative;
		top: -10px;
		font-size: 10px;
		color:#22395D;
	}
</style>

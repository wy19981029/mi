<template>
  <div class="about" v-if="info.data">
	  <div>
		  <van-search placeholder="搜索商品名" v-model="value" />
	  </div>
		<div>
			<van-tabs v-model="active">
			  <van-tab v-for="item,index in info.data.tabs" :title="item.name" >
			   {{ item.name }}
			  </van-tab>
			  </van-tabs>
		</div>
		<div v-show="active==0">
			<van-swipe :autoplay="3000" class="cout">
				<van-swipe-item v-for="item in info.data.data.sections[0].body.items" >
				<img :src="item.img_url_webp" />
				</van-swipe-item>
			</van-swipe>
				<van-grid :column-num="5" icon-size="60px">
				  <van-grid-item
				    v-for="item in info.data.data.sections[1].body.items"
				    :key="item.value"
				    :icon="item.img_url_webp"
				  />
				</van-grid>
				<van-grid :column-num="5" icon-size="60px">
				  <van-grid-item
				    v-for="item in info.data.data.sections[2].body.items"
				    :key="item.value"
				    :icon="item.img_url_webp"
				  />
				</van-grid>
				<div class="da">
					<div class="xz">
						<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/32b5d24417b673008f386592c4d17046.jpg?f=webp&w=537&h=762&bg=C1DDE9" class="son">
					</div>
					<div class="xz2">
						<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1480d862e1f5a41e5adae8c030eef511.jpg?f=webp&w=537&h=378&bg=F4FCFF" class="son2">
						<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b1bd2de2b7ef3589377831cc7d41fde.jpg?f=webp&w=537&h=378&bg=FCF5E5" class="son2">
					</div>
				</div>
				<div class="hoder">
					<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/54cbbe787b6269d434b26bd80de4d6a4.jpg?f=webp&w=1080&h=420&bg=CBDDE7" alt="">
				</div>
				<div class="hoder">
					<img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e32eea5c3c27062019f9ac6434b351df.jpg?f=webp&w=1080&h=660&bg=FFFFFF" alt="">
				</div>
				<div class="onn">
					<van-row type="flex" justify="space-around">
						  <van-col span="6" class="son">
								<img :src="info.data.data.sections[10].body.items[0].img_url_webp" alt="">
								<h3>{{info.data.data.sections[10].body.items[0].product_name}}</h3>
								<span class="infoac">{{info.data.data.sections[10].body.items[0].product_brief}}</span>
								<p class="bedpq">{{info.data.data.sections[10].body.items[0].product_org_price}}</p>
								<div class="reaq">
									<span>立即购买</span>
								</div>
						  </van-col>
					  <van-col span="6" class="son">
						  <img :src="info.data.data.sections[10].body.items[1].img_url_webp" alt="">
						  <h3>{{info.data.data.sections[10].body.items[1].product_name}}</h3>
						  <span class="infoac">{{info.data.data.sections[10].body.items[1].product_brief}}</span>
						  <p class="bedpq">{{info.data.data.sections[10].body.items[1].product_org_price}}</p>
						  <div class="reaq">
						  	<span>立即购买</span>
						  </div>
					  </van-col>
					 
					</van-row>
				</div>
			
				<div class="onn1">
					<van-row type="flex" justify="space-around">
						  <van-col span="6" class="son">
								<img :src="info.data.data.sections[12].body.items[0].img_url_webp" alt="">
								<h3>{{info.data.data.sections[12].body.items[0].product_name}}</h3>
								<span class="infoac">{{info.data.data.sections[12].body.items[0].product_brief}}</span>
								<p class="bedpq">{{info.data.data.sections[12].body.items[0].product_org_price}}</p>
								<div class="reaq">
									<span>立即购买</span>
								</div>
						  </van-col>
					  <van-col span="6" class="son">
						  <img :src="info.data.data.sections[12].body.items[1].img_url_webp" alt="">
						  <h3>{{info.data.data.sections[12].body.items[1].product_name}}</h3>
						  <span class="infoac">{{info.data.data.sections[12].body.items[1].product_brief}}</span>
						  <p class="bedpq">{{info.data.data.sections[12].body.items[1].product_org_price}}</p>
						  <div class="reaq">
						  	<span>立即购买</span>
						  </div>
					  </van-col>
					 
					</van-row>
				</div>
				<div class="zxc">
					<van-row type="flex" justify="center">
					  <van-col span="6">
						  {{info.data.data.sections[14].body.items[0].action_title}}
					  </van-col>
					</van-row>
				</div>
				<van-image
				  width="100%"
				  height="200px"
				  :src="info.data.data.sections[16].body.items[0].img_url_webp"
				/>
				<van-image
				  width="100%"
				  height="250px"
				  :src="info.data.data.sections[18].body.items[0].img_url_webp"
				/>
				<div class="onn3">
					<van-row type="flex" justify="space-around">
						  <van-col span="6" class="son">
								<img :src="info.data.data.sections[20].body.items[0].img_url_webp" alt="">
								<h3>{{info.data.data.sections[20].body.items[0].product_name}}</h3>
								<span class="infoac">{{info.data.data.sections[20].body.items[0].product_brief}}</span>
								<p class="bedpq">{{info.data.data.sections[20].body.items[0].product_org_price}}</p>
								<div class="reaq">
									<span>立即购买</span>
								</div>
						  </van-col>
					  <van-col span="6" class="son">
						  <img :src="info.data.data.sections[20].body.items[1].img_url_webp" alt="">
						  <h3>{{info.data.data.sections[20].body.items[1].product_name}}</h3>
						  <span class="infoac">{{info.data.data.sections[20].body.items[1].product_brief}}</span>
						  <p class="bedpq">{{info.data.data.sections[20].body.items[1 ].product_org_price}}</p>
						  <div class="reaq">
						  	<span>立即购买</span>
						  </div>
					  </van-col>
					 
					</van-row>
				</div> 
				<div class="onn4">
					<van-row type="flex" justify="space-around">
						  <van-col span="6" class="son">
								<img :src="info.data.data.sections[22].body.items[0].img_url_webp" alt="">
								<h3>{{info.data.data.sections[22].body.items[0].product_name}}</h3>
								<span class="infoac">{{info.data.data.sections[22].body.items[0].product_brief}}</span>
								<p class="bedpq">{{info.data.data.sections[22].body.items[0].product_org_price}}</p>
								<div class="reaq">
									<span>立即购买</span>
								</div>
						  </van-col>
					  <van-col span="6" class="son">
						  <img :src="info.data.data.sections[22].body.items[1].img_url_webp" alt="">
						  <h3>{{info.data.data.sections[22].body.items[1].product_name}}</h3>
						  <span class="infoac">{{info.data.data.sections[22].body.items[1].product_brief}}</span>
						  <p class="bedpq">{{info.data.data.sections[22].body.items[1 ].product_org_price}}</p>
						  <div class="reaq">
						  	<span>立即购买</span>
						  </div>
					  </van-col>
					 
					</van-row>
				</div>
		</div>
		<div v-show="active==1">
			<van-image
			  width="100%"
			  height="400px"
			  :src="info3.data.data.sections[0].body.items[0].img_url_webp"
			/>
			<van-image
			  width="100%"
			  height="50px"
			  :src="info3.data.data.sections[4].body.items[0].img_url_webp"
			/>
			<van-image
			  width="100%"
			  height="50px"
			  :src="info3.data.data.sections[8].body.items[0].img_url_webp"
			/>
			
			<div class="sky">
				<van-row>
				  <van-col span="8"  class="once">
					  <img :src="info3.data.data.sections[9].body.items[0].img_url_webp" >
					  <img :src="info3.data.data.sections[10].body.items[0].img_url_webp" class="twoandthree">
					  <img :src="info3.data.data.sections[11].body.items[0].img_url_webp" class="twoandthre">
				  </van-col>
				  <van-col span="8" class="twoce">
					  <img :src="info3.data.data.sections[9].body.items[1].img_url_webp" >
					  <img :src="info3.data.data.sections[10].body.items[1].img_url_webp" class="twoandthree" >
					  <img :src="info3.data.data.sections[11].body.items[1].img_url_webp" class="twoandthre" >
				  </van-col>
				  <van-col span="8" class="trece">
					  <img :src="info3.data.data.sections[9].body.items[2].img_url_webp" >
					  <img :src="info3.data.data.sections[10].body.items[2].img_url_webp" class="twoandthree" >
					  <img :src="info3.data.data.sections[11].body.items[2].img_url_webp" class="twoandthre" >
				  </van-col>
				</van-row>
			</div>
			<van-image
			  class="toupi"
			  width="100%"
			  height="50px"
			  :src="info3.data.data.sections[12].body.items[0].img_url_webp"
			/>
			<van-image
			  class="toupi"
			  width="100%"
			  height="50px"
			  :src="info3.data.data.sections[14].body.items[0].img_url_webp"
			/>
			<div  class="imgnoe">
				<van-image  
				  width="100%"
				  height="200px"
				  :src="info3.data.data.sections[16].body.items[0].img_url_webp"
				/>
				<h3>{{info3.data.data.sections[16].body.items[0].product_name}}</h3>
				<p>{{info3.data.data.sections[16].body.items[0].product_brief}}</p>
				<span class="tta">{{info3.data.data.sections[16].body.items[0].product_org_price}}</span>
				<div class="bk">
					<span>立即预约</span>
				</div>
			</div>
			<div  class="imgnoe" id="zxcaw">
				<van-image  
				  width="100%"
				  height="200px"
				  :src="info3.data.data.sections[18].body.items[0].img_url_webp"
				/>
				<h3>{{info3.data.data.sections[18].body.items[0].product_name}}</h3>
				<p>{{info3.data.data.sections[18].body.items[0].product_brief}}</p>
				<span class="tta">{{info3.data.data.sections[18].body.items[0].product_org_price}}</span>
				<div class="bk">
					<span>立即预约</span>
				</div>
			</div>			
		</div>

  
  </div>
</template>



<script>
	import {info3,info4} from	'../data.js'
	import Vue from 'vue';
	import { Tabbar,TabbarItem,Tab,Tabs,Swipe,SwipeItem,Grid,GridItem,ImagePreview} from 'vant';
	Vue.use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(Grid).use(GridItem);
		export default{
			data() {
			    return {
			      active: 0,
				  info:{},
				  info2:{},
				  info3:{},
				  info4:{},
				  value:""
			    }
			  }, 
			created(){
			  	
			  	this.$http({
					url:'http://biger.applinzi.com/page.php',
					method:"get"
					}).then((res)=>{
					this.info=res.data;
					})
					this.info3=info3;
					this.info4=info4;
					console.log(this.info3)
					}
		}
		
		
	
	
</script>

<style >
.cout img{
	width: 100%;
}
.da{
	width: 100%;
	height: 300px;
}
.xz{
	float: left;
	width: 50%;
	height: 300px;
	position: relative;
	left: -20px;
}
.xz img{
	width: 100%;
	height: 300px;
}
.xz2{
	float: left;
	width: 50%;
	height: 300px;
}
.xz2 img{
	width: 100%;
	height: 150px;
}
.hoder{
	width: 100%;
}
.hoder img{
	width: 100%;
}
.onn{
	width: 100%;
	height: 100px;	
}
.son{
	margin-left: 20px;
	width: 50%;
}
.son img{
	width: 100%;
	height: 200px;
}
.reaq{
	width: 50%;
	background-color: #E46F6F;
	position: relative;
	left: 50px;
}
.reaq span{
	color: white;
}
.infoac{
	color: #42B983;
}
.bedpq{
	color: red;
}
.onn1{
	margin-top: 280px;
	width: 100%;
	height: 100px;	
}
.onn2{
	margin-top: 280px;
	width: 100%;
	height: 100px;	
}
.zxc{
	margin-top: 280px;
}
.onn3{
	margin-top: 20px;
	width: 100%;
	height: 100px;	
}
.onn4{
	margin-top: 280px;
	width: 100%;
	height: 100px;	
}
.sky{
	width: 100%;
}
.once{
	width: 33.33%;
}
.once img{
	width: 100%;
}
.twoandthree{
	position: relative;
	top: -5px;
}
.twoandthre{
	position: relative;
	top: -10px;
}
.twoce{
	width: 33.33%;
}
.twoce img{
	width: 100%;
}.trece{
	width: 33.33%;
}
.trece img{
	width: 100%;
}
.toupi{
	position: relative;
	top: -15px;
}
.imgnoe{
	position: relative;
	top: -18px;
	width: 100%;
}
.bk{
	height: 30px;
	width: 20%;
	color: white;
	background-color: #E46F6F;
	position: relative;
	left: 285px;
	top: -70px;
}
.imgnoe h3{
	top: -10px;
	position: relative;
	left: -110px;
}
.imgnoe p{
	color: #3D414D;
	font-size: 5px;
	position: relative;
	left: -100px;
	height: -20px;
	top: -25px;
}
.tta{
	position: relative;
	left: 150px;
	top: -75px;
	color: red;
}
#zxcaw{
	position: relative;
	top: -80px;
}
</style>
























































































	
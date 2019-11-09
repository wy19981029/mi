<template>
	<div>
		<div class="head1">
			<img src="../../../img/download.png" alt="" >
			<p @click="gou" v-if="this.$store.getters.getlog">登录/注册</p>
			<p v-else>个人中心 </p>
			<p v-show="!this.$store.getters.getlog" @click="out">注销</p>
		</div>
		<van-cell is-link @click="showPopup">我的订单 <span class="rig">全部订单</span> </van-cell>
		<van-row>
		  <van-col span="8"><van-icon name="pending-payment" size="30px" /></van-col>
		  <van-col span="8"><van-icon name="logistics" size="30px" /></van-col>
		  <van-col span="8"><van-icon name="warn-o" size="30px" /></van-col>
		</van-row>
		<van-row>
		  <van-col span="8">待付款</van-col>
		  <van-col span="8">待收货</van-col>
		  <van-col span="8">退换修</van-col>
		</van-row>
		<van-cell is-link @click="showPopup"><van-icon name="vip-card-o" size="30px" class="ccz" /><span class="lanma" id="hh">会员中心</span></van-cell>
		<div class="csb"></div>
		<van-cell is-link @click="showPopup"><van-icon name="pending-payment" size="30px" class="ccz" /><span class="lanma">我的优惠</span></van-cell>
		<van-divider />
		<van-cell is-link @click="showPopup"><van-icon name="like" size="30px" class="ccz" />服务中心</van-cell>
		<div class="csb"></div>
		<van-cell is-link @click="showPopup"><van-icon name="wap-home" size="30px" class="ccz" />小米之家</van-cell>
		<van-divider />
		<van-cell is-link @click="showPopup"><van-icon name="send-gift-o" size="30px" class="ccz" />我的F码</van-cell>
		<div class="csb"></div>
		<van-cell is-link @click="showPopup"><van-icon name="point-gift-o" size="30px" class="ccz" />礼物兑换码</van-cell>
		<van-divider />
		<van-cell is-link @click="showPopup">设置</van-cell>
	</div>
</template>

<script>
	export default{	
		data() {
		    return {
		      show: false
		    }
		  },
	   methods: {
		  showPopup() {
			this.show = true;
		  },
		  gou(){
			  this.$router.push('/log')
		  },
		  out(){
			  this.$http({
				  url:"http://www.520mg.com/member/index_login.php",
				  method:"post",
				  data:"dopost=exit",
				  withCredentials:true
			  }).then((res)=>{
				  if(res.data.status==1){
					  this.$store.commit("getbush",true)
				  }
			  })
		  }
		}, 
	}
</script>

<style lang="less">
	.rig{
		margin-left: 240px;
	}
	.csb{
		float: right;
		width: 350px;
		height: 1px ;
		background-color: #2AADD1;
	}
	.head1{
		width: 100%;
		height: 100px;
		background-color:#DE8525;
		p{
			font-size: 20px;
			position: relative;
			top: -65px;
			left: -20px;
			color: white;	
		}
		img{
			height: 80px;
			width: 80px;
			position: relative;
			top: 10px;
			left: -120px;
		}
	}
	.ccz{
		position: relative;
		top: 7px;
	}

</style>

<template>
	<div>
		<div class="headr">
			<van-image
			  width="80"
			  height="80"
			  src="https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo@2x.png"
			/>
			<p>小米用户登录</p>

		</div>
		

		<van-cell-group>
		  <van-field
		    v-model="usename"
		    clearable
		    right-icon="question-o"
		    placeholder="请输入用户名"
		    @click-right-icon="$toast('用户名')"
		  />
		  <van-field
		    v-model="pwd"
		    type="password"
		    placeholder="请输入密码"
		  />
		</van-cell-group>
		<van-button type="danger" size="large" @click="login">登录</van-button>
	
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				usename:"",
				pwd:""
			}
		},
	  methods: {
	    onClickLeft() {
	      this.$router.go(-1)
	    },
	    onClickRight() {
	      Toast('按钮');
	    },
		login(){
			this.$http({
				url:"http://www.520mg.com/member/index_login.php",
				method:"post",
				data:`fmdo=login&dopost=login&userid=${this.usename}&pwd=${this.pwd}`,
				withCredentials:true
			}).then((res)=>{
				if(res.data.status==1){
					this.$store.commit("getbush",false)
					this.$router.push("/shopcar")
				}
			})
		}
		
		
	  }
	}
</script>

<style>
	.headr{
		margin-top: 30px;
	}
	.headr p{
		font-size: 20px;
		
	}
</style>

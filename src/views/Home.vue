<template>
	<div>
		
		<van-nav-bar title="分类" left-text="返回" left-arrow   @click-left="onClickLeft" @click-right="onClickRight">
		  <van-icon name="search" slot="right" />
		</van-nav-bar>
		
		<van-row>
		  <van-col span="6">
			  <van-sidebar v-model="activeKey3" >
			    <van-sidebar-item :title="item.category_name"  v-for="item,index in cls.data" />
			  </van-sidebar>
		  </van-col>
		  <van-col span="18" >
			  <div v-for="item,index in cls.data" v-show="activeKey3==index" >
				 <div v-for="item1 in item.category_list">
					<div v-if="item1.view_type== 'cells_auto_fill' ">
						<van-image
						  width="100%"
						  :src="item1.body.items[0].img_url_webp"
						  class="sac"
						/>
					</div>
					<div v-else-if="item1.view_type=='category_title'" style="width: 50%;">
						<van-divider>{{item1.body.category_name}}</van-divider>	
					</div>
					<div v-else-if="item1.view_type== 'category_group' ">
						 <van-grid :column-num="3">
						   <van-grid-item
						     v-for="item2 in item1.body.items"
						     :icon="item2.img_url_webp"
						     :text="item2.product_name"
							 @click="going(item2.product_name)"
						   />
						 </van-grid>
					 </div>
					
				 </div>
				
			  </div>
		  </van-col>
		</van-row>
		
		
		
		
		
	</div>

</template>



<script>
import HelloWorld from '@/components/HelloWorld.vue'
import {text} from '../data.js'
export default {
	 data() {
	    return {
	      activeKey3: 0,
		  cls:text
	    };
	  },
	   methods: {
	      onClickLeft() {
	        this.$router.go(-1)
	      },
	      onClickRight() {
	        this.$toast("搜索")
	      },
		  going(path){
			  this.$router.push(`/king/${path}`)
		  }
		  
	    }
}
</script>

<style>

</style>





















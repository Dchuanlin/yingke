<template>
	<div class="foot">
		<detailed v-for="(item,idex) in foote" :key="item.createTime" @click.native="toUrl(idex)" :obj="item"></detailed>
	</div>
</template>

<script>
	import detailed from "@/components/doubapp/footer/detail"
	export default {
		name:"footers",
		components:{
			detailed
		},
		data:function(){
			return {
				foote:[{name:"首页",img:"1.png",img2:"6.png",toUrl:"/Index",bol:true},
						{name:"书影音",img:"2.png",img2:"7.png",toUrl:"/film",bol:false},
						{name:"广播",img:"3.png",img2:"8.png",toUrl:"/guangbo",bol:false},
						{name:"小组",img:"4.png",img2:"9.png",toUrl:"/group",bol:false},
						{name:"我的",img:"5.png",img2:"10.png",toUrl:"/my",bol:false}]
			}
		},
		methods:{
			toUrl:function(idex){
				for(var i=0;i<this.foote.length;i++){
					this.foote[i].bol=false;
				}
				this.foote[idex].bol=true;
				this.$router.push(this.foote[idex].toUrl);
			}
		}
	}
</script>

<style scoped>
	.foot{
		width: 100%;
		height: 65px;
		display: flex;
		position: fixed;
		bottom: 0px;
		border-top: solid 1px gainsboro;
		background-color: white;
	}
</style>
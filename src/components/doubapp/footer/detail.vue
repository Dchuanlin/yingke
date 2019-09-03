<template>
	<div class="detail">
		<img v-show="!obj.bol" :src="'../../../../static/'+obj.img"/>
		<img v-show="obj.bol" :src="'../../../../static/'+obj.img2"/>
		<br/>
		<span :class="{aactive:obj.bol}">{{obj.name}}</span>
	</div>
</template>

<script>
	export default{
		name:"detailed",
		props:["obj"]
	}
</script>

<style scoped>
	.detail{
		width: 20%;
	}
	.detail img{
		width: 50%;
	}
	.aactive{
		color:red
	}
</style>
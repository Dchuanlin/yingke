<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  	<footers></footers>
  </div>
</template>

<script>
import footers from "@/components/doubapp/footer/footers"
export default {
  name: 'App',
  components:{
  	footers
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
	padding: 0px;
	margin: 0px;
}

</style>

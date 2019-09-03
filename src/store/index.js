import Vue from "vue";
import VueX from "vuex";
Vue.use(VueX);


export default new Vuex.Store({
		state:{
			id:1,
			name:"周杰伦",
			objs:{names:"abc"},
			arr:["a","b","c"]
		},
		mutation:{
			setId:function(state){//修改数据仓库种id的属性值
				state.id++;
			},
			setIdTwo:function(state,num){
				state.id = state.id+num;
			}
		}
})

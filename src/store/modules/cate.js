import Vue from 'vue'

import Vuex from 'vuex'

Vue.use('vuex')


import { reqcateList} from '../../util/request'
const state={
    list:[],
    

    //请求回来的总数

}
const  mutations={
    changeList(state,arr){
        state.list =arr
    },
  
        
}

const actions={
    requestcateList(context){
        reqcateList({
          istree:true
        }).then(res=>{
            context.commit('changeList',res.data.list)
        })

    },
   

}
const getters={
    list(state){
        return state.list
    },
   

}


export  default{
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}
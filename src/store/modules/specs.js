import Vue from 'vue'

import Vuex from 'vuex'

Vue.use('vuex')


import { reqspecsList} from '../../util/request'
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
    requestspecsList(context){
        reqspecsList({
          size:5,
          page:1
        }).then(res=>{
            var arr = res.data.list

            arr.forEach(item=>{
                item.attrs = JSON.parse(item.attrs)
            })
            context.commit('changeList',arr)
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
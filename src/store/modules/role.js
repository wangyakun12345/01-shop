import Vue from 'vue'

import Vuex from 'vuex'
Vue.use('vuex')


import {reqRoleList} from '../../util/request'
const state={
    list:[]

}
const  mutations={
    changeList(state,arr){
        state.list =arr
    }
       
}

const actions={
    requestRoleList(context){
        reqRoleList().then(res=>{
            context.commit('changeList',res.data.list)
        })

    }

}
const getters={
    list(state){
        return state.list
    }

}


export  default{
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}
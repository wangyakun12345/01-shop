<template>
<div>
    <el-button type="primary" @click="willAdd">添加</el-button>
    <v-add :info='info' ref='one'></v-add>
    <v-list @edit='edit($event)'></v-list>
</div> 
</template> 
<script>

import vAdd from './components/add'
import vList from './components/list'
export default {
    // beforeRouterEnter(){

    // },
components:{
    vAdd,
    vList
},
data () {
 return {
     info:{
         isShow:false,

         isAdd:true,
         title:'菜单添加11'    //给添加按钮填一个标识  用来判断弹框中的按钮到底是添加还是修改
     }
 }
},
methods:{
      willAdd(){
        //   this.info.isShow = !this.info.isShow
        //   this.info.isAdd= true
          this.info={
              isShow:true,
              isAdd:true,
              title:'菜单添加'
              
          }
          this.$refs.one.empty()
      },
      edit(e){
        //   console.log(e)
        this.info.isShow = true
        this.info.isAdd=false
        console.log(this.$refs.one)
        this.$refs.one.look(e)
        this.info.title='菜单编辑'

      }
},
mounted(){
}
}
</script>
<style scoped>

</style>
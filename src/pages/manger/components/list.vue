<template>
<div>
      <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="用户编号" sortable width="180">
      </el-table-column>
      <el-table-column prop="username" label="用户名称" sortable width="180">
      </el-table-column>
      <el-table-column prop="roleid" label="所属角色" sortable width="180">
      </el-table-column>
    
      <el-table-column prop="status" label="状态">
       
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status==1">启用</el-button>
          <el-button type="danger" v-else>禁用</el-button
          >
        </template>
      </el-table-column>
      
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
</div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
import { requserDel} from '../../../util/request'
export default {
    computed:{
     ...mapGetters({
         list:'manger/list'
     })
    },
components:{
},
data () {
 return {
 }
},
methods:{
    edit(id){
        this.$emit('edit',id)

    },
    del(id){
         requserDel({id:id}).then(res=>{
          alert("删除成功")
           this.  requestuserList();
         })

    },
    ...mapActions({
         requestuserList:'manger/requestuserList'
    })
},
mounted(){
    this.requestuserList()
}
}
</script>
<style scoped>
</style>
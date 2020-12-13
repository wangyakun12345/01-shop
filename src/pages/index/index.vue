<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="/index/home"
          router
          class="el-menu-vertical-demo"
          
          background-color="#20222A"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/index/home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <div v-for="item in list.menus" :key='item.id'>
          <el-submenu :index="item.url" v-if='item.children'>
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group>
           
              <el-menu-item :index="'/index'+i.url" v-for="i in item.children" :key='i.id'>{{i.title}}</el-menu-item>
              <!-- <el-menu-item index="/index/role">角色管理</el-menu-item>
              <el-menu-item index="/index/manger">管理员管理</el-menu-item> -->
            </el-menu-item-group>
            
              
          </el-submenu>
          <el-menu-item v-else :index="item.url">{{item.title}}</el-menu-item>
          
          </div>
          <!-- <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-shop"></i>
              <span>商城管理</span>
            </template>

            <el-menu-item-group>
           
              <el-menu-item index="/index/classify">商品分类</el-menu-item>
              <el-menu-item index="/index/spec">商品规格</el-menu-item>
              <el-menu-item index="/index/goods">商品管理</el-menu-item>
              <el-menu-item index="/index/vip">会员管理</el-menu-item>
              <el-menu-item index="/index/banner">轮播图管理</el-menu-item>
              <el-menu-item index="/index/seckill">秒杀</el-menu-item>
              
            </el-menu-item-group>
            
              
          </el-submenu> -->

         
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="headerTop"> {{list.username}}</div>
          <div><el-button type="danger" @click="quit">退出</el-button></div>
        </el-header>
        <el-main>
            <!-- 面包屑导航 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
  
</el-breadcrumb>
            <div class="mgt"><router-view></router-view></div> 
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed:{
       ...mapGetters({
         list:'user/list'
       })
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      requestuserList:'user/requestuserList'
    }),
    quit(){
      this.requestuserList({})
      this.$router.push("/login")
    }
  },
  mounted() {
    // this.requestuserList()
  },
};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #20222A;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}
.el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    /* min-width: 200px; */
}
.mgt{ 
    margin-top:20px;
}
.headerTop{
  float :left;
  margin-left:600px;
}
</style>
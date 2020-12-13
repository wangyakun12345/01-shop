<template>
  <div class="box">
    <div class="con">
      <h3>登录</h3>
      <div><input type="text" v-model="user.username" /></div>
      <div><input type="text" v-model="user.password" /></div>
      <div><button @click="login">登录</button></div>
    </div>
  </div>
</template>
<script>
import { requserLogin } from "../../util/request";
import {mapGetters,mapActions} from 'vuex'
export default {
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
      ...mapActions({
         requestuserList:'user/requestuserList'
      }),
    login() {
      requserLogin(this.user).then((res) => {
        if (res.data.code == 200) {
          this.requestuserList(res.data.list);
          this.$router.push("/index/home");
        } else {
          alert(res.data.msg);
        }
      });
    },
  },
  mounted() {},
};
</script>
<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #563443, #303d60);
  overflow: hidden;
}
.con {
  width: 300px;
  height: 350px;
  background-color: #fff;
  margin: 150px auto;
}
h3 {
  font-size: 30px;
}
input {
  width: 250px;
  height: 40px;
  margin-top: 20px;
  font-size: 30px;
  outline: none;
  margin-left: 20px;
}
button {
  width: 250px;
  height: 40px;
  font-size: 30px;
  outline: none;
  border: none;
  margin-left: 20px;
  margin-top: 20px;
  background-color: #409eff;
}
</style>
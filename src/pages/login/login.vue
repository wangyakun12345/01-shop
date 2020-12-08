<template>
<div class="box">
    <div class="con">
        <h3>登录</h3>
        <div> <input type="text"></div>
        <div> <input type="text"></div>
        <div> <button>登录</button></div>
    </div>
    
</div>
</template>
<script>
export default {
components:{
},
data () {
 return {
 }
},
methods:{
},
mounted(){
}
}
</script>
<style scoped>
.box{
    width:100vw;
    height: 100vh;
   background: linear-gradient(to right,#563443,#303D60);
   overflow: hidden;
}
.con{
    width: 300px;
    height: 350px;
    background-color: #fff;
    margin:150px auto;
}
h3{
    font-size:30px;
}
input{
    width: 250px;
    height: 40px;
    margin-top:20px;
    font-size:30px;
    outline: none;
   margin-left:20px;
}
button{
     width: 250px;
    height: 40px;
    font-size:30px;
    outline: none;
    border:none;
    margin-left:20px;
    margin-top:20px;
  background-color: #409EFF;
}
</style>
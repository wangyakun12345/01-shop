<template>
<div>
    <div id="main" style="width:800px;height:400px;border:1px dashed #ccc"></div>
     
</div>
</template>
<script>
import echarts from 'echarts'
import {mapActions,mapGetters} from 'vuex'
export default {
 computed:{
   ...mapGetters({
     list:'cate/list'
   })
 },
components:{
 },
data () {
 return {
 }
},
methods:{
    ...mapActions({
        requestcateList:'cate/requestcateList'
    })
},
mounted(){
  this.requestcateList()
  
},
watch:{
    list:{
        handler(){
           var myChart = echarts.init(document.getElementById('main'));

      
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: this.list.map(item=>item.catename)
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: this.list.map(item=>item.children?item.children.length:0)
            }]
        };

        
        myChart.setOption(option); 
        },
        deep:true
    }
}
}
</script>
<style scoped>
</style>
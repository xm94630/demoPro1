<template>
  <div id="app">
    1231
    <!-- 各个组件渲染 -->
    <template v-for="(arr) in pageConfig.components">
      <template v-for="(item) in arr">
        <component
          :key = "item.id"
          :is = "arr.jsCode"
          :myConfig= "item"
        ></component>
      </template>
    </template>

  </div>
</template>

<script>
import Vue from "vue";
//全局配置
//日后要放到单独的静态资源服务器。这里配置资源的位置：
//let widgetUrl = "./components/";
let widgetUrl = "http://127.0.0.1:9000/components/"; //远程检查地址

let pageConfig ={
  "canvas":{},
  "components":{
    "XM":[{
      "id": "0001",
      "type": "XM",
      "css":{},
      "widgetOption":{
        text:"我是XM组件的配置哦"
      },
    },{
      "id": "0002",
      "type": "XM",
      "css":{},
      "widgetOption":{
        text:"我是XM组件的配置哦，我是另外一个"
      },
    }],
    "JY":[{
      "id": "0003",
      "type": "JY",
      "css":{},
      "widgetOption":{
        text:"我是JY组件的配置哦"
      },
    }],
  }
}

function loadWidgetFromRemote(name,url) {
    return new Promise(function (resolve, reject) {
        require('http').get(url,function(req){
            var html='';
            req.on('data',(data)=>{html+=data;});
            req.on('end',()=>{
              html = html.replace('export default ','window.'+name+'=')
              console.log(html);
              eval(html);
              resolve();
            });
            req.on('error',(e)=>{reject(e.message);});
        });
    })
}



// //引入组件对应的js模块和css文件
// for(let key in pageConfig.components){
//   pageConfig.components[key].jsCode = require(widgetUrl + key + '/' + key + '.vue@Compile.js').default
//   require(widgetUrl + key + '/css/index.css');
// } 

export default {
  name: 'app',
  components: {
  },
  methods:{
    getWidgetsAsync(){
      for(let key in pageConfig.components){
        loadWidgetFromRemote(key,widgetUrl+key+'/'+key+'.vue@Compile.js').then(()=>{
          for(let key in pageConfig.components){
            //针对于data为对象的情况，如果不这么用而直接等号赋值，就需要使用$forceUpdate来更新。
            Vue.set(pageConfig.components[key], 'jsCode', window[key])
          } 
        })
      }
    }
  },
  data:function(){
    return {
      pageConfig:pageConfig
    }
  },
  created(){
    this.getWidgetsAsync();
  }
}
</script>

<style>
.constomWidget{
  margin-bottom: 10px;
}
</style>

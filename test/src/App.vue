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
//全局配置
//日后要放到单独的静态资源服务器。这里配置资源的位置：
//let widgetUrl = "./components/";
//let widgetUrl = "http://127.0.0.1:9000/components/";

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

function xxx(name,url) {
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
    zzz(that){

      for(let key in pageConfig.components){


        xxx(key,'http://127.0.0.1:9000/components/'+key+'/'+key+'.vue@Compile.js').then(()=>{
          for(let key in pageConfig.components){
            pageConfig.components[key].jsCode = window[key];
            that.$forceUpdate();
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
    let that = this;
    this.zzz(that);
  }
}
</script>

<style>
.constomWidget{
  margin-bottom: 10px;
}
</style>

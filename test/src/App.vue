<template>
  <div id="app">



    <!-- 各个组件渲染 -->
    <template v-for="(arr) in widgetConfig2.components">
      <template v-for="(item) in arr">
        <component
          :key = "item.id"
          :is = "arr.myWidget"
          :myConfig= "item"
        ></component>
      </template>
    </template>




    <!-- <template v-for="(one,key) in widgetConfig">
      <component
        :key = "key"
        :is = "one.myWidget"
        :myConfig= "one.config"
      ></component>
    </template> -->
  </div>
</template>

<script>
//全局配置
//日后要放到单独的静态资源服务器。这里配置资源的位置：
let widgetUrl = "./components/";

//配置文件
let widgetConfig = [{
  widgetType:"XM",
  config:{
    css:"background:red"
  }
},{
  widgetType:"JY",
  config:{
    css:"background:yellow"
  }
}];

let widgetConfig2 ={
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

for(let key in widgetConfig2.components){
  widgetConfig2.components[key].myWidget = require(widgetUrl + key + '/' + key + '.vue@Compile').default
} 



widgetConfig = widgetConfig.map((one)=>{
  one.myWidget = require(widgetUrl + one.widgetType + '/' + one.widgetType + '.vue@Compile').default
  return one;
})

function loadCSS(url){
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.url = url;
  document.getElementsByTagName('head')[0].appendChild(link);
}

function loadAllWidgetConfig(widgetConfig){
  let css = require(widgetUrl+"XM/css/index.css")
  let css2 = require(widgetUrl+"JY/css/index.css")
  loadCSS(css);
  loadCSS(css2);
  return widgetConfig;
}

loadAllWidgetConfig();

export default {
  name: 'app',
  components: {
  },
  data:function(){
    return {
      widgetConfig:widgetConfig,
      widgetConfig2:widgetConfig2,
    }
  }
}
</script>

<style>
.constomWidget{
  background: #ccc;
  margin-bottom: 10px;
}
</style>


//全局配置
//日后要放到单独的静态资源服务器。这里配置资源的位置：
let widgetUrl = "./components/";

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

//引入组件对应的js模块和css文件
for(let key in pageConfig.components){
  pageConfig.components[key].jsCode = require(widgetUrl + key + '/' + key + '.vue@Compile').default
  require(widgetUrl + key + '/css/index.css');
} 

export default {
	template: `
<div id="app">

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

</div>`,
  name: 'app',
  components: {
  },
  data:function(){
    return {
      pageConfig
    }
  }
}

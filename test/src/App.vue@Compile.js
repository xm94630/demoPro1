
//全局配置
//日后要放到单独的静态资源服务器。这里配置资源的位置：
let widgetUrl = "./components/";

//配置文件
let widgetConfig = [{
  widgetType:"JY",
  config:{
    css:"background:red"
  }
},{
  widgetType:"XM",
  config:{
    css:"background:yellow"
  }
}];

widgetConfig = widgetConfig.map((one)=>{
  one.myWidget = require(widgetUrl + one.widgetType + '/' + one.widgetType + '.vue@Compile').default
  return one;
})






export default {
	template: `
<div id="app">
  <template v-for="(one,key) in widgetConfig">
    <component
      :key = "key"
      :is = "one.myWidget"
      :myConfig= "one.config"
    ></component>
  </template>
</div>`,
  name: 'app',
  components: {
  },
  data:function(){
    return {
      widgetConfig:widgetConfig
    }
  }
}

<template>
  <div id="app">
    我是APP哦
    <XM/>
    <!-- <JY/> -->
    <component
      :is = "JY"
    ></component>
  </div>
</template>

<script>
import XM from './components/XM.vue'
//import JY from './components/JY.vue'
//import JY from './components/JY.vue_xuming'

let config = [{
  widgetName:'JY',
  id:'01',
},{
  widgetName:'JY',
  id:'01',
}];
let JY = getWidget(config[0].widgetName);
function getWidget(){
  let w = require('./components/JY.vue_xuming').default; 
  return w;
}

console.log('==>')
console.log(JY)



export default {
  name: 'app',
  components: {
    XM,
    JY
  },
  data:function(){
    return {
      JY:JY
    }
  }
}
</script>

<style>
</style>

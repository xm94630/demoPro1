<template>
  <div id="app">
    我是APP哦
    <XM/>
    <JY/>
    <component
      :is = "JY"
    ></component>
  </div>
</template>

<script>
import XM from './components/XM.vue'
import JY from './components/xxx'

let config = ['JY'];
let thisWidget = getWidget(config[0]);
function getWidget(){
  let w = require('./components/xxx');
  console.log(w)
  return w;
}



export default {
  name: 'app',
  components: {
    XM,
    JY
  },
  data:function(){
    return {
      JY:thisWidget
    }
  }
}
</script>

<style>
</style>

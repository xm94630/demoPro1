<template>
  <div id="app">
    我是APP哦
    <XM/>
    <component
      :is = "JY"
    ></component>
  </div>
</template>

<script>
import XM from './components/XM.vue'
//import JY from './components/JY.vue'
//import JY from './components/JY.vue_xuming'

let config = ['JY'];
let JY = getWidget(config[0]);
function getWidget(){
  let w = require('./components/JY.vue_xuming').default;
  return w;
}

console.log('==>')
console.log(JY)



export default {
  name: 'app',
  components: {
    XM
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

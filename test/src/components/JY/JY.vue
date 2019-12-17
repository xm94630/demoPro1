<template>
  <div class="constomWidget JY">
    <div @click="clickFun">鲸鱼，{{str}}，点击我还有弹层!</div>
    <div>{{str2}}</div>
    <div>配置为：{{myConfig}}</div>
  </div>
</template>

<script>
import {widget} from './libs/myJs';
export default {
  name: 'JY',
  props: {
    msg: String,
    myConfig:null,
  },
  data:function() {
    return {
      str:'我爱你',
      str2:widget.name,
      clickFun:function(){alert('哈哈哈')}
    }
  },
}
</script>


<style scoped>

</style>

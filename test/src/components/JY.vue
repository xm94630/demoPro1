<template>
  <div class="JY" @click="clickFun">
    鲸鱼，{{str}}，点击我还有弹层
  </div>
</template>

<script>
export default {
  name: 'JY',
  props: {
    msg: String
  },
  data:function() {
    return {
      str:'我爱你',
      clickFun:function(){alert('哈哈哈')}
    }
  },
}
</script>


<style scoped>
.JY{
  color:red;
}
</style>

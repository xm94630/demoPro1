<template>
  <div class="constomWidget XM">
    这是一个可爱的组件。配置为：{{myConfig}}
  </div>
</template>

<script>
export default {
  name: 'XuMing',
  props: {
    msg: String,
    myConfig:null,
  },
  methods:{
  }
}
</script>


<style scoped>
@import url("./css/index.css"); 
</style>

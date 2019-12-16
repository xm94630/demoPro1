<template>
  <div class="constomWidget XM" @click="yyy">
    这是一个可爱的组件。配置为：{{myConfig}}
  </div>
</template>

<script>
import {xxx} from '../js/lala.js'
export default {
  name: 'XuMing',
  props: {
    msg: String,
    myConfig:null,
  },
  methods:{
    yyy:xxx,
  }
}
</script>


<style scoped>

</style>

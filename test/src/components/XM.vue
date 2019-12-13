<template>
  <div class="XM" @click="yyy">
    这是一个可爱的组件。
  </div>
</template>

<script>
import {xxx} from '../js/lala.js'
export default {
  name: 'XuMing',
  props: {
    msg: String
  },
  methods:{
    yyy:xxx,
  }
}
</script>


<style scoped>

</style>

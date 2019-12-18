<template>
  <div class="constomWidget XM">
    这是一个可爱的组件。配置为：{{myConfig}}
    <el-button type="primary">element组件也是支持的</el-button>
     <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
  </div>
</template>

<script>
export default {
  name: 'XuMing',
  props: {
    msg: String,
    myConfig:null,
  },
  data() {
    return {
      num: 1
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
}
</script>


<style scoped>
@import url("./css/index.css"); 
</style>

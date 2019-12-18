
import axios from "axios";
import JY from "./JY"
export default {
	template: `
<div class="constomWidget XM">
  这是一个可爱的组件。配置为：{{myConfig}}
  <div>从服务器获得的数据源：{{aaa}}</div>
  <el-button type="primary">element组件也是支持的</el-button>
  <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
  <JY></JY>
</div>`,
  name: 'XuMing',
  props: {
    msg: String,
    myConfig:null,
  },
  components: {
    JY,
  },
  data() {
    return {
      num: 1,
      aaa:'默认'
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  },
  mount(){
    axios.get('http://localhost:3000/epimetheus/api_v1/diy/view/info?diyViewCode=123').then(res => {
      this.aaa = res;
    });
  }
}

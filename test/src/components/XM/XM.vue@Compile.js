
export default {
	template: `
<div class="constomWidget XM">
  这是一个可爱的组件。配置为：{{myConfig}}
</div>`,
  name: 'XuMing',
  props: {
    msg: String,
    myConfig:null,
  },
  methods:{
  }
}

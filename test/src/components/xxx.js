
export default {
	template: `
<div class="JY" @click="clickFun">
  鲸鱼，{{str}}，点击我还有弹层。我是单独的js呢，看看好用不。
</div>`,
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

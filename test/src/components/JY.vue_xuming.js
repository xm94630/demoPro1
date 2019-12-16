
import {widget} from './myJs';
export default {
	template: `
<div class="JY" @click="clickFun">
  鲸鱼，{{str}}，点击我还有弹层。
  <div>{{str2}}</div>
</div>`,
  name: 'JY',
  props: {
    msg: String
  },
  data:function() {
    return {
      str:'我爱你',
      str2:widget.name,
      clickFun:function(){alert('哈哈哈')}
    }
  },
}

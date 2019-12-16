
import XM from './components/XM.vue'
import JY from './components/JY.vue'

let config = ['JY'];
let thisWidget = getWidget(config[0]);
function getWidget(){
  let w = require('./components/JY.vue');
  console.log(w)
  return w;
}



export default {
	template: `
<div id="app">
  我是APP哦
  <XM/>
  <JY/>
  <component
    :is = "JY"
  ></component>
</div>`,
  name: 'app',
  components: {
    XM,
    JY
  },
  data:function(){
    return {
      JY:thisWidget
    }
  }
}

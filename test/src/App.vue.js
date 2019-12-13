
import XM from './components/XM.vue'
import JY from './components/JY.vue'

export default {
	template: `
<div id="app">
  我是APP哦
  <XM/>
  <JY/>
</div>`,
  name: 'app',
  components: {
    XM,
    JY
  }
}

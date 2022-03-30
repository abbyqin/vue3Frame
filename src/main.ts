import { createApp, h } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

// createApp 创建一个函数实例
const app = createApp(App)
app.config.errorHandler = (err, vm, info) => {
  // 处理错误
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  console.log('main : ', info)
}

app.config.globalProperties.foo = 'bar'

// 定义全局组件
app.component('testCa', {
  template: '<div>{{text_a}}</div>',
  data: function(){
    return{
      text_a: '运行时编译'
    }
  }
})

// 自定义指令
app.directive('DirectiveColor', {
  mounted(el, binding){
    el.style.color = binding.value
  }
})

app.directive('pos', {
  mounted(el, binding){
    el.style.position = 'fixed'
    const pos = binding.arg || 'top'
    el.style[pos] = binding.value + 'px'
  }
})

// 渲染函数h(html标签， 与标签相关的属性，子元素)
app.component('headElement',{
  render(){
    return h(
      'h'+this.level,
      // {},
      this.$slots.default() // 包含其子节点的数组
    )
  },
  props:{
    level:{
      type: Number,
      required: true
    }
  }
})


// h()函数的slot
app.component('testCb', {
  props: ['message'],
  render() {
    // `<div><slot :text="message"></slot></div>`
    return h('div', {}, this.$slots.default({
      text: this.message
    }))
  }
})

// mount 函数返回根组件的实例
app.mount('#app')


<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="vs"></div>
    <grand-child v-bind="$attrs"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from 'vue';
import GrandChild from './GrandChild.vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components:{
    GrandChild
  },
  data(){
    return{
      a:'haha'
    }
  },
  setup(){
    const count = ref(0);
    const internalInstance = getCurrentInstance()

    console.log(internalInstance?.appContext.config.globalProperties)
    return{
      count
    }
  },
  mounted(){
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
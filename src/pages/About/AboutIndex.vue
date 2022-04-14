<template>
  <div class="about">about</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup(){
    const route = useRoute()
    console.log('about : ', route.query)
    return{

    }
  }
})
</script>
<style>
.about{
  color: red;
}
</style>
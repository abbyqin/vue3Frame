<template>
  <div>{{route.params.username}}</div>
</template>
<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup(){
    const route = useRoute()
    watch(
      ()=>route.params,
      (toParams, previousParams) => {
        console.log(toParams, previousParams)
      }
    )
    return{
      route
    }
  },
})
</script>
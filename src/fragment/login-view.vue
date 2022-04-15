<template>
  <div @click="login">login</div>
</template>
<script lang="ts">
// import api from '@/axios/apis'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'LoginView',
  setup(){
    const store = useStore()
    const login = ()=>{
      const params = {
        code: "86",
        keep_alive: false,
        password: "qxia1213",
        phone: "18174956541",
      }
      store.dispatch('user/login', params)
    }
    return {
      login
    }
  }
})
</script>
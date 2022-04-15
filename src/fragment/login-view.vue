<template>
  <div @click="login">login</div>
</template>
<script lang="ts">
import api from '@/axios/apis'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginView',
  setup(){
    const login = ()=>{
      const params = {
        code: "86",
        keep_alive: false,
        password: "qxia1213",
        phone: "18174956541",
      }
      api.login(params).then((user: any) =>{
        console.log('user : ', user)
      }).catch((error: any)=>{
        console.log('login error >> ', error)
      })
    }
    return {
      login
    }
  }
})
</script>
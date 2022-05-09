<template>
  <div class="change-language">
    <dt>切换语言</dt>
    <dd v-for="item in languages" :key="item.key" @click="changLanguage(item.key)">{{ item.label }}</dd>
  </div>
  <login-view />
  <router-link class="link" to="/">HOME</router-link>
  <router-link class="link" to="/about">ABOUT</router-link>
  <router-link class="link" to="/user/Jack">USER</router-link>
  <router-link class="link" @click="click" :to="'/'+reg">REG</router-link >
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import { useI18n } from 'vue-i18n';
import LoginView from '@/fragment/login-view.vue'
export default defineComponent({
  name: 'App',
  components: {
    LoginView
  },
  setup(){
    const { ctx } = getCurrentInstance() as any
    const changLanguage = (key: string)=>{
      ctx.$i18n.locale = key
    }
    const { t } = useI18n()
    console.log('获取当前语言翻译 ： ', t('home.country'))
    return{
      isOpen: false,
      row: { name: '王丽', study: 'Java' },
      reg: '',
      languages: [
        {label: '中文', key: 'zh'},
        {label: 'English', key: 'en'}
      ],
      changLanguage
    }
  },
  methods:{
    click(){
      console.log('aaaa', this.$router.resolve({ name: 'chapters', params: { chapters: [] } }))
      this.reg = this.$router.resolve({
        name: 'chapters',
        params: {
          chapters: []
        }
      }).href
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link{
  margin: 10px;
  color: $brandColor;
}
</style>

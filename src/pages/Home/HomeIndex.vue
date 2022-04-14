<template>
  <div @click="pushWithQuery('nice')">{{ $t('home.country') }}</div>
  <Granphic v-if="false" :data="graphic"/>
  <button @click="changeStore">click me</button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Granphic from '@/components/Graphic/GraphicIndex.vue'
import ModuleInfo from '@/entities/ModuleInfo'
import { useRoute, useRouter } from 'vue-router'
import { mapActions, mapState, useStore } from 'vuex'
export default defineComponent({
  components:{
    Granphic
  },
  computed: {
    ...mapState({
      count: (state:any) => state.count
    }),
    username(){
      return this.$route.params.username
    },
  },
  setup(){
    const allData = (window as any).allData;
    const graphic = ref<ModuleInfo | null>(allData.modules[4] || null)
    // console.log('graphic : ', graphic)
    console.log('useRoute', useRoute().params)
    // const route = useRoute()
    const router = useRouter()
    function pushWithQuery(query: string){
      router.push({
        path: '/about',
        query: {
          id: query
        }
      })
    }
    const store = useStore()
    // console.log('store : ', store)
    return{
      store,
      graphic,
      pushWithQuery
    }
  },
  created(){
    // this.store.commit('increment')
    // this.store.dispatch('moduleA/increment',{amount: 10})
    // this.increment() ////映射的store.moduleA/increment 不带参数
    this.increment({amount: 10}) //映射的store.moduleA/increment, 带参数
    // this.actionA().then(()=>{
    //   console.log('hello')
    // })
    // console.log('getters : ', this.store.getters.doneTodos)
  },
  methods:{
    ...mapActions('moduleA', [
      'increment',
    ]),
    ...mapActions([
      'actionA'
    ]),
    changeStore(){
      this.store.commit({
        type:'LOCAL_MUTATION'
      })
    },
    goToDashboard(){
      // this.$store.commit('increment')
      this.$router.push('/')
    }
  }
})
</script>
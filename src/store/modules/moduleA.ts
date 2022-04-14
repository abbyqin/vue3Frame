const moduleA = {
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    increment (state: any) {
      state.count++
      console.log('mutation : ', state.count)
    },
  },
  getters: {
    doubleCount (state: { count: number }) {
      return state.count*2
    }
  },
  actions:{
    increment (context: { commit: (arg0: string) => void }, payLoad: { amount: any }){
      console.log('moduleA actions context', context)
      console.log('moduleA actions payload : ', payLoad.amount)
      setTimeout(()=>{
        context.commit('increment')
      },3000)
    },
  }
}

export default moduleA
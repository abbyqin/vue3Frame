import User from "@/entities/User"

export interface UserState {
  token: string,
  user: User | null
}

const TOKEN_KEY = 'App.user.token';

const user = {
  namespaced: true,
  state: () => ({
    token: '',
    user: null
  }),
  mutations: {
    SET_TOKEN: (state: UserState, token: string) => {
      state.token = token
      // cookies.set(TOKEN_KEY, token);
    }
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

export default user
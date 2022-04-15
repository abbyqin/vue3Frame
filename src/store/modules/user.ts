import apis from "@/axios/apis";
import User from "@/entities/User"
import { cookies } from "@/utils/storage";

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
      cookies.set(TOKEN_KEY, token);
    },
    SET_USER: (state: UserState, user: User | null) => {
      state.user = user
    }
  },
  actions:{
    login ( context: { commit: (arg0: string, arg1: string | User | null) => void; }, data: any): Promise<User | null> {
      return new Promise( (resolve, reject) => {
        console.log('store login : ', data)
        apis.login(data).then((user: User)=>{
          context.commit('SET_TOKEN', user.token || '')
          context.commit('SET_USER', user)
          resolve(user)
        }).catch((error) => {
          context.commit('SET_TOKEN', '')
          context.commit('SET_USER', null)
          reject(error)
        })
      })
    }
  }
}

export default user
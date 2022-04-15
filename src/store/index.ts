
import { createStore } from "vuex";
import moduleA from "./modules/moduleA";
import moduleB from "./modules/moduleB";

const myPlugin = (store: any) => {
  store.subscribe((mutatuin: any, state: any) => {
    // 每次mutation之后调用
    // mutation的格式为{type, payload}
    console.log('plugin : ', mutatuin, state)
  })
}

const store = createStore({
  state(){
    return {
      todos:[
        {id:1, text:'todos1', done: true},
        {id:2, text:'todos2', done: false}
      ],
    }
  },
  mutations: {
    incrementAll(state: any) {
      state.todos.push({id: 3, text:'todos3', done: false})
      console.log('incrementAll : ', state.todos)
    }
  },
  actions: {
    actionA (context: any) {
      return new Promise<void>( (resolve, reject) => {
        setTimeout(()=>{
          context.commit('incrementAll')
          resolve()
        },3000)
      })
    }
  },
  getters:{
    doneTodos: (state: any)=>{
      return state.todos.filter((todo: { done: any; })=>todo.done)
    },
    doneTodoCount: (state: any, getters: any)=>{
      return getters.doneTodos.length
    }
  },
  modules: {
    moduleA: moduleA,
    moduleB: moduleB
  },
  plugins: [myPlugin]
})

export default store
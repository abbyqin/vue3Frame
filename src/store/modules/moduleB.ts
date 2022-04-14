import { LOCAL_MUTATION } from "../mutation-types"

const moduleB = {
  namespaced: true,
  state: () => ({
    localKey: 'storage'
  }),
  mutations: {
    [LOCAL_MUTATION] (state: { localKey: string }) {
      state.localKey = 'GOOD JOB'
      console.log('localKey', state.localKey)
    }
  },
  getters: {
    getLocalKey (state: { localKey: string }) {
      return state.localKey + 'NICE'
    }
  }
}
export default moduleB
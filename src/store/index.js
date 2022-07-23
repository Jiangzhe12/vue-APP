import { createStore } from 'vuex'

export default createStore({
  state: {
    curMenu:{
      name:'剧集',
      bgColor:'#ff0000',
    },
  },
  getters: {
  },
  mutations: {
    setCurMenu(state,data){
      state.curMenu = data;
    }
  },
  actions: {
  },
  modules: {
  }
})

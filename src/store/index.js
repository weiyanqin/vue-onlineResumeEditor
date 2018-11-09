import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active: 'profile',
    user: {
      id: '',
      username: ''
    },
    resume: {
        profile: { name: "", city: "", birth: "" },
        workHistory: [{ company: "", content: "" }],
        studyHistory: [{ school: "", duration: "", degree: "" }],
        projects: [{ name: "", content: "" }],
        awards: [{ name: "" }],
        contacts: [{ qq: "", wechat: "", phone: "", email: "" }]
    }
  },
  mutations: {

    initState(state, payload){
     Object.assign(state, payload)
    },
    switchTab (state, payload){
        state.active = payload // 关于 payload 看这里 http://vuex.vuejs.org/zh-cn/mutations.html#提交载荷（payload）
        localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state, {path, value}){
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state, payload){
      Object.assign(state.user, payload)
    },
    removeUser(state){
      state.user.id = null
    }
  }

})
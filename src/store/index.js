import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active: 'profile',
    resume: {
        profile: { name: "", city: "", birth: "" },
        workHistory: [{ company: "", content: "" }],
        studyHistory: [{ school: "", duration: "", degree: "" }],
        projects: [{ name: "", content: "" }],
        awards: [{ name: "" }],
        contacts: { qq: "", wechat: "", phone: "", email: "" }
    }
  },
  mutations: {
    switchTab (state, payload){
        state.selected = payload // 关于 payload 看这里 http://vuex.vuejs.org/zh-cn/mutations.html#提交载荷（payload）
      }
  }
})
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
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
    increment (state) {
      state.count++
    }
  }
})
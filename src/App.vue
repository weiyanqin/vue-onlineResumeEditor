<template>
  <div id="app" v-bind:class="{previewMode: previewMode,loginMode: loginMode,signUpMode: signUpMode}">
    <Topbar class="topbar" v-on:preview="preview" v-on:login="login" v-on:signUp="signUp"/>
    <main>
      <Editor v-bind:resume="resume" class="editor"/>
      <Preview v-bind:resume="resume" class="preview"/>
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from "./components/Topbar";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

import store from './store/index'

import AV from './lib/leancloud'
import getAVUser from './lib/getAVUser'

export default {
  name: 'app',
  data() {
    return {
      previewMode: false,
      loginMode: false,
      signUpMode: false,
    }
  },
  store,
  methods: {
    exitPreview() {
      this.previewMode = false;
    },
    preview() {
      this.previewMode = true;
    },
    login() {
      this.loginMode = true;
    },
    signUp() {
      this.signUpMode = true;
    }
  },
  computed: {
    resume (){
      return this.$store.state.resume
    } 
  },
  components: { Topbar, Editor, Preview },
  
  created (){
    let state = localStorage.getItem('state')
    if(state){
      state = JSON.parse(state) 
    }
    this.$store.commit('initState', state)
    this.$store.commit('setUser', getAVUser())
  }

};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.topbar {
  box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

main {
  display: flex;
  flex: 1;
  background: #ddd;
  > .editor {
    width: 40em;
    margin: 16px 8px 16px 16px;
    background: white;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    border-radius: 4px;
    overflow: hidden;
  }
  > .preview {
    flex: 1;
    margin: 16px 16px 16px 8px;
    background: white;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    border-radius: 4px;
  }
}
.previewMode > #topbar {
  display: none;
}
.previewMode #editor {
  display: none;
}
.previewMode > #preview {
  max-width: 800px;
  margin: 32px auto;
}
#exitPreview {
  display: none;
}
.previewMode #exitPreview {
  display: inline-block;
  position: fixed;
  right: 16px;
  bottom: 16px;
}
.loginMode #topbar .login {
  display: block;
}
.signUpMode #topbar .signUp {
  display: block;
}
</style>

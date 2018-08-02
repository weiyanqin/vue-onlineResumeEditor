<template>
  <div id="app">
    <Topbar/>
    <Editor/>
    <Preview/>
  </div>
</template>

<script>

import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: "App",
  components: {
    Topbar,Editor,Preview
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  
}
</style>

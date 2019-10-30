<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <top-bar></top-bar>
    <community></community>
  </div>
</template>

<script>
import topBar from './components/topBar.vue'
import Community from './components/community/Community.vue'

export default {
  name: 'app',
  components: {
      topBar,
      Community
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

  body {
    margin:0;
    font-family: "Lato", sans-serif !important;
    font-size: 0.8rem !important;
  }

  nav .row {
    width:100%;
  }

  .colMargin {
    margin-bottom: 10px;
  }

  .shadowBox, .card {
    box-shadow: 3px 3px #ccc;
  }

  .card, .card-header {
    border-radius: 0 !important;
  }

  .chartMin {
    height:440px;
  }

</style>

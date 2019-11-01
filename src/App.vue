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
import Highcharts from 'highcharts'

let customColors = ['#e67e22', '#27aae1', '#359154'];
Highcharts.setOptions({
    colors: Highcharts.map(customColors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.2).get('rgb')] // darken
            ]
        };
    })
});

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

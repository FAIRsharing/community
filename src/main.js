import Vue from 'vue'
import App from './App.vue'

import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import Variablepie from 'highcharts/modules/variable-pie'
import More from 'highcharts/highcharts-more'
import Export from 'highcharts/modules/exporting'
import Sankey from 'highcharts/modules/sankey'
import Organization from 'highcharts/modules/organization'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Variablepie(Highcharts);
More(Highcharts);
Sankey(Highcharts);
Organization(Highcharts);
Export(Highcharts);


Vue.use(VueMaterial);
Vue.use(HighchartsVue);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

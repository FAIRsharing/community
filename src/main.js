import Vue from "vue/dist/vue.js"
import App from './App.vue'
import VueRouter from 'vue-router'

import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import Variablepie from 'highcharts/modules/variable-pie'
import More from 'highcharts/highcharts-more'
import Export from 'highcharts/modules/exporting'
import Sankey from 'highcharts/modules/sankey'
import Organization from 'highcharts/modules/organization'
import Gantt from "highcharts/modules/gantt";

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import 'bootstrap/scss/bootstrap.scss'
import './breakpoints.scss'

import Community from './components/community/Community'
import Datascriptor from './components/datascriptor/Datascriptor'

Variablepie(Highcharts);
More(Highcharts);
Sankey(Highcharts);
Organization(Highcharts);
Gantt(Highcharts);
Export(Highcharts);

Vue.use(VueMaterial);
Vue.use(HighchartsVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {path: '/community', component: Community},
  {path : '/datascriptor', component: Datascriptor}
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');

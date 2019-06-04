import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCopyright, faEnvelope} from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false;

Vue.use(Buefy);

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(
    faEnvelope, faCopyright
);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

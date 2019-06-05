import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";

//Fa Solid
import {
    faCopyright, faEnvelope, faGlobe, faCode, faHeart
} from "@fortawesome/free-solid-svg-icons";
library.add(
    faEnvelope, faCopyright, faGlobe, faCode, faHeart
);

//Fa Regular
import {
    faSmileWink
} from "@fortawesome/free-regular-svg-icons";
library.add(
    faSmileWink
);

//Fa Brand
import {
    faFacebook, faGithub, faLinkedin, faTwitter, faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
library.add(
    faGithub, faLinkedin, faFacebook, faTwitter, faWhatsapp
);

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

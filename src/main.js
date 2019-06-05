import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics';
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

Vue.use(VueAnalytics, {
    id: 'UA-139040929-2'
});
Vue.use(Buefy);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});

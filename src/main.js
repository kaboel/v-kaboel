import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.min.css';
import 'bulma-divider/dist/css/bulma-divider.min.css';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import VeeValidate from "vee-validate";

//Fa Solid
import {
    faCopyright,
    faEnvelope,
    faGlobe,
    faCode,
    faHeart,
    faTimes,
    faUndo,
    faAngleDoubleUp,
    faCheck,
    faArrowLeft,
    faSpinner,
    faCogs,
    faDatabase,
    faTools,
    faCheckCircle,
    faInfoCircle,
    faExclamationTriangle,
    faExclamationCircle,
    faArrowUp,
    faAngleUp, faAngleRight, faAngleLeft, faAngleDown, faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload
} from "@fortawesome/free-solid-svg-icons";
library.add(
    faEnvelope, faCopyright, faGlobe,
    faCode, faHeart, faTimes,
    faCheck, faUndo, faAngleDoubleUp,
    faArrowLeft, faSpinner, faCogs,
    faDatabase, faCheckCircle, faInfoCircle,
    faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleUp, faAngleRight,
    faAngleLeft, faAngleDown, faEye,
    faEyeSlash, faCaretDown, faCaretUp,
    faUpload
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
    faAngular,
    faCss3,
    faFacebook,
    faGithub,
    faHtml5,
    faJs,
    faLess,
    faLinkedin,
    faNode,
    faNodeJs,
    faPhp,
    faSass,
    faTwitter,
    faVuejs,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
library.add(
    faGithub, faLinkedin, faFacebook,
    faTwitter, faWhatsapp, faPhp,
    faJs, faCss3, faLess, faSass,
    faAngular, faVuejs, faHtml5,
    faTools, faNodeJs, faNode
);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Buefy, {
    defaultIconComponent: 'font-awesome-icon',
    defaultIconPack: 'fas',
});
Vue.use(VeeValidate, {
    classes: true,
    classNames: {
        invalid: 'is-danger',
        valid: 'is-success'
    }
});

router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');
        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });

        // We use this to track which meta tags we create, so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');
        return tag;
    })
    // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    next();
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

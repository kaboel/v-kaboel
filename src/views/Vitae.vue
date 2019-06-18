<template>
    <div id="vitae">
        <nav class="navbar is-spaced has-shadow">
            <div class="navbar-brand has-text-centered">
                <a class="is-size-4 navbar-item" href="/">
                    <img src="../assets/KS-logo-black-160.png" alt="Faiq Allam | A Code Junkie, and Full Stack Web Developer">
                </a>

                <div id="navbarBurger" class="navbar-burger burger"
                     data-target="navbarMenu"
                     @click="navToggle = !navToggle"
                     :class="{'is-active' : navToggle}">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarMenu" class="navbar-menu" :class="{'is-active' : navToggle}">
                <div class="navbar-end">
                    <div class="navbar-item has-text-centered">
                        <router-link class="has-text-black f-control pl-md pr-md" to="/vitae/en"
                                     v-show="$route.params.lang === 'id'">
                            <font-awesome-icon :icon="['fas', 'arrow-left']"></font-awesome-icon>
                            <span class="ml-sm">English Version</span>
                        </router-link>
                        <router-link class="has-text-black f-control pl-md pr-md" to="/vitae/id"
                                     v-show="$route.params.lang === 'en'">
                            <font-awesome-icon :icon="['fas', 'arrow-left']"></font-awesome-icon>
                            <span class="ml-sm">Versi Bahasa Indonesia</span>
                        </router-link>
                        <b-tooltip label="Close" class="f-control" type="is-dark" position="is-bottom" animated>
                            <router-link class="has-text-black pl-md pr-md" to="/">
                                <font-awesome-icon :icon="['fas', 'times']" class="fa-lg"></font-awesome-icon>
                            </router-link>
                        </b-tooltip>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="columns">
                <div class="column is-8-desktop is-offset-2-desktop p-lg has-text-centered">
                    <o class="subtitle" id="dataView">
                        Curriculum Vitae -
                        <strong>{{ $route.params.lang }}</strong>
                    </o>
                </div>
            </div>
        </div>
        <div class="view">
            <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
            <iframe id="file" :src="getData($route.params.lang)"></iframe>
        </div>

    </div>
</template>
<script>
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    import BLoading from "buefy/src/components/loading/Loading";
    export default {
        name: 'vitae',
        components: {BLoading, BTooltip},
        data() {
            return {
                navToggle: false,
                isLoading: false
            }
        },
        created() {
            const lang = this.$route.params.lang;
            if(lang !== 'id' && lang !== 'en') {
                this.$router.push('/*');
            }
        },
        mounted() {
            const loading = this.$loading.open();
            const vitae = document.getElementById('file');
            vitae.onload = (e) => {
                e.preventDefault();
                loading.close();
            }
        },
        methods: {
            getData(lang) {
                if(lang === 'id') {
                    return 'https://drive.google.com/file/d/1d5byvA9geJr4dQz8DJmANqZtsEhGi3F-/preview';
                } else {
                    return 'https://drive.google.com/file/d/1EKbABTmGpP4N8i4Q-kZjV3kAoFZF3j2K/preview';
                }
            }
        }
    }
</script>

<style scoped>
    @media(max-width: 1024px) {
        .f-control {
            margin-left: 7.5rem !important;
            margin-right: 7.5rem !important;
        }
    }
    @media(max-width: 768px) {
        .f-control {
            margin-left: 5rem !important;
            margin-right: 5rem !important;
        }
    }
    @media(max-width: 640px) {
        .f-control {
            margin-left: 2rem !important;
            margin-right: 2rem !important;
        }
    }
    #file {
        position: absolute;
        margin-left: 10%;
        height: 82.5%;
        width: 80%;
        -webkit-box-shadow: 1px 2px 4px #444;
        -moz-box-shadow: 1px 2px 4px #444;
        box-shadow: 1px 2px 4px #444;
    }
    @media(max-width: 700px) {
        #file {
            width: 100% !important;
            height: 100% !important;
            margin-left: 0 !important;
        }
    }
</style>

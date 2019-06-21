<template>
    <nav class="navbar is-spaced is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <img src="../../assets/KS-skillet-black-128x128.png" alt="Faiq Allam | A Code Junkie, and Full Stack Web Developer">
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
                <a href="#about" class="navbar-link has-text-black is-arrowless">
                    About
                </a>
                <a href="#projects" class="navbar-link has-text-black is-arrowless">
                    Projects
                </a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link has-text-black">
                        Curriculum Vitae
                    </a>
                    <div class="navbar-dropdown is-right">
                        <div class="navbar-item has-text-grey-light">
                            Available in 2 languages
                        </div>
                        <hr class="navbar-divider">
                        <b-tooltip label="Still Unavailable" type="is-warning" position="is-left" animated>
                            <a class="navbar-item" disabled>
                                <strong class="mr-sm">ID</strong> -
                                <span class="ml-sm">Bahasa Indonesia</span>
                            </a>
                        </b-tooltip>
                        <router-link class="navbar-item" to="/vitae/en">
                            <strong class="mr-sm">EN</strong> -
                            <span class="ml-sm">English</span>
                        </router-link>
                    </div>
                </div>
                <div class="navbar-item has-text-centered">
                    <b-tooltip label="Under Maintenance" type="is-warning" position="is-bottom" animated>
                        <a class="button is-rounded is-black is-outlined" disabled>
                            <font-awesome-icon :icon="['fas', 'envelope']" class="mr-sm fa-lg"></font-awesome-icon>
                            <b>Get in touch</b>
                        </a>
                    </b-tooltip>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    export default {
        name: 'Header',
        components: {BTooltip},
        data() {
            return {
                navToggle : false
            }
        }
    }
</script>

<style scoped>
    .navbar {
        height: 10rem;
        padding-left: 3rem !important;
        padding-right: 3rem !important;
    }
    .navbar-burger {
        margin-top: 2.5rem;
    }
    .navbar-item img {
        max-height: 8rem;
    }
</style>

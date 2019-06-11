<template>
    <nav class="navbar is-spaced is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <img src="../../assets/KS-skillet-black-128x128.png" alt="Faiq Allam | A Code Junkie... oh God, I've said those too much">
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
                <div class="navbar-item has-text-centered has-dropdown is-hoverable">
                    <a class="navbar-link has-text-black is-arrowless">
                        Curriculum Vitae
                    </a>
                    <div class="navbar-dropdown is-right">
                        <div class="navbar-item has-text-grey-light">
                            Available in 2 languages
                        </div>
                        <hr class="navbar-divider">
                        <router-link class="navbar-item" to="/vitae/id">
                            <strong class="mr-sm">ID</strong> -
                            <span class="ml-sm">Bahasa Indonesia</span>
                        </router-link>
                        <router-link class="navbar-item" to="/vitae/en">
                            <strong class="mr-sm">EN</strong> -
                            <span class="ml-sm">English</span>
                        </router-link>
                    </div>
                </div>
<!--                <a href="#projects" class="navbar-link has-text-black is-arrowless">-->
<!--                    Projects-->
<!--                </a>-->
                <div class="navbar-item has-text-centered">
                    <router-link class="button is-rounded is-black is-outlined"
                                 active-class="is-focused"
                                 exact-active-class="is-focused"
                                 to="/contact">
                        <font-awesome-icon :icon="['fas', 'envelope']" class="mr-sm fa-lg"></font-awesome-icon>
                        <b>Get in touch</b>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header',
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
    nav a {
        font-family: Titillium Web, sans-serif;
    }
</style>

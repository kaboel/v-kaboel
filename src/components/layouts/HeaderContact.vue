<template>
    <nav class="navbar is-spaced has-shadow">
        <div class="navbar-brand has-text-centered">
            <a class="is-size-4 navbar-item" href="/">
                <img src="../../assets/KS-logo-black.png">
            </a>

            <div id="navbarBurger" class="navbar-burger burger"
                 data-target="navbarMenu"
                 @click="navToggle = !navToggle"
                 :class="{'is-active' : navToggle}"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarMenu" class="navbar-menu" :class="{'is-active' : navToggle}">
            <div class="navbar-end">
                <div class="navbar-item has-text-centered">
                    <b-tooltip label="Reset" type="is-dark" animated position="is-bottom">
                        <a href="#" class="has-text-black pl-md pr-md" rounded>
                            <font-awesome-icon :icon="['fas', 'undo']" class="fa-1x"></font-awesome-icon>
                        </a>
                    </b-tooltip>
                    <b-tooltip label="Close" type="is-dark" animated position="is-bottom">
                        <router-link class="has-text-black is-outlined pl-md pr-md" rounded to="/">
                            <font-awesome-icon :icon="['fas', 'times']" class="fa-lg"></font-awesome-icon>
                        </router-link>
                    </b-tooltip>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    export default {
        name: 'headerContact',
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
        padding-left: 3rem !important;
        padding-right: 3rem !important;
    }
    nav a {
        font-family: Titillium Web, sans-serif;
    }
</style>

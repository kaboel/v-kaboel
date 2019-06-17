<template>
    <form id="project">
        <nav class="navbar is-spaced has-shadow">
            <div class="navbar-brand has-text-centered">
                <a class="is-size-4 navbar-item" href="/">
                    <img src="../assets/KS-logo-black-160.png" alt="Faiq Allam | A Code Junkie... oh God, I've said those too much">
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
                        <b-tooltip label="Reset" class="f-control" type="is-dark" animated position="is-bottom">
                            <a class="has-text-black pl-md pr-md" @click="resetForm">
                                <font-awesome-icon :icon="['fas', 'undo']" class="fa-1x"></font-awesome-icon>
                            </a>
                        </b-tooltip>
                        <b-tooltip label="Close" class="f-control" type="is-dark" animated position="is-bottom">
                            <router-link class="has-text-black pl-md pr-md" to="/">
                                <font-awesome-icon :icon="['fas', 'times']" class="fa-lg"></font-awesome-icon>
                            </router-link>
                        </b-tooltip>
                    </div>
                </div>
            </div>
        </nav>
    </form>
</template>

<script>
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    export default {
        name: 'project',
        components: {BTooltip},
        data() {
            return {
                navToggle: false
            }
        }
    }
</script>

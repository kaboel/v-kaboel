<template>
    <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a href="#" class="navbar-item">
                <img src="../../assets/Logo.png">
            </a>

            <div id="navbarBurger" class="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item has-text-centered">
                    <b-button type="is-black" rounded outlined>
                        <font-awesome-icon :icon="['fas', 'envelope']" class="mr-sm fa-lg"></font-awesome-icon>
                        <b>Get in touch</b>
                    </b-button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import BButton from "buefy/src/components/button/Button";
    export default {
        name: 'Header',
        components: {BButton},
    }
</script>

<style scoped>
    nav button {
        font-family: Titillium Web, sans-serif;
        letter-spacing: -1px;
    }
</style>

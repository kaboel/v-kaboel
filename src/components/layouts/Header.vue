<template>
    <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a href="#" class="navbar-item">
                <img src="../../assets/K-Mid.png">
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
                    <a class="button is-black is-outlined" href="#">
                        <font-awesome-icon :icon="['fas', 'envelope']" class="mr-sm fa-lg"></font-awesome-icon>
                        <b>Get in touch</b>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>
    nav a {
        font-family: Titillium Web, sans-serif;
        letter-spacing: -1px;
    }
</style>

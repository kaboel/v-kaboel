<template>
    <footer class="footer has-background-black pb-xl">
        <div class="container has-text-centered">
            <div class="columns">
                <div class="column is-8-desktop is-offset-2-desktop">
                    <div>
                        <img src="../../assets/KS-logo-white.png" width="500">
                    </div>
                    <div class="mb-xl">
                        <h1 class="title is-4 has-text-light ff-space">
                            Cook, Eat, Code, Repeat.
                        </h1>
                    </div>
                    <hr/>
                    <div class="mt-xl mb-lg">
                        <SocialButtons />
                    </div>
                    <div class="mb-md">
                        <p class="has-text-white">
                            <small>
                                <font-awesome-icon icon="copyright"></font-awesome-icon>
                                2K19. All Rights Reserved.
                            </small>
                        </p>
                        <p>
                            <strong class="has-text-white is-size-7">
                                kaboel@kodeskillet.com
                            </strong>
                        </p>
                    </div>
                    <div>
                        <img src="../../assets/made-with.png" width="300" usemap="#madeWith" alt="Made With Vue.js + Bulma">
                        <map name="madeWith">
                            <area target="_blank" alt="vuejs.org" title="" href="https://vuejs.org" coords="78,23,100,60,120,23" shape="poly">
                            <area target="_blank" alt="bulma.io" title="" href="https://bulma.io" coords="164,21,281,61" shape="rect">
                        </map>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-pulled-right pr-lg">
            <a href="#" class="has-text-light">
                <font-awesome-icon :icon="['fas', 'angle-double-up']" class="fa-2x" ></font-awesome-icon>
            </a>
        </div>
    </footer>
</template>

<script>
    import SocialButtons from "../SocialButtons";
    export default {
        name: 'Footer',
        components: {SocialButtons}
    }
</script>

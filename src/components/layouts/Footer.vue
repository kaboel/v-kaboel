<template>
    <footer class="footer has-background-black has-text-centered">
        <div class="container">
            <div class="columns">
                <div class="column is-8-desktop is-offset-2-desktop">
                    <div class="mb-xl">
                        <h1 class="title is-3 has-text-light motto ff-space">
                            Cook, Eat, Code, Repeat.
                        </h1>
                    </div>
                    <div class="mb-lg">
                        <b-tooltip label="Follow me on Twitter" type="is-light" animated>
                            <a class="has-text-light mr-lg">
                                <font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x"></font-awesome-icon>
                            </a>
                        </b-tooltip>
                        <b-tooltip label="Add me on Facebook" type="is-light" animated>
                            <a class="has-text-light mr-lg">
                                <font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x"></font-awesome-icon>
                            </a>
                        </b-tooltip>
                        <b-tooltip label="Look me up on LinkedIn" type="is-light" animated>
                            <a class="has-text-light mr-lg">
                                <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-2x"></font-awesome-icon>
                            </a>
                        </b-tooltip>
                        <b-tooltip label="Chat me on Whatsapp" type="is-light" animated>
                            <a class="has-text-light mr-lg">
                                <font-awesome-icon :icon="['fab', 'whatsapp']" class="fa-2x"></font-awesome-icon>
                            </a>
                        </b-tooltip>
                        <b-tooltip label="Visit my GitHub" type="is-light" animated>
                            <a class="has-text-light mr-lg">
                                <font-awesome-icon :icon="['fab', 'github']" class="fa-2x"></font-awesome-icon>
                            </a>
                        </b-tooltip>
                        <b-tooltip label="Mail to kaboel@kodeskillet.com" type="is-light" animated>
                            <a class="has-text-light">
                                <font-awesome-icon :icon="['fas', 'envelope']" class="fa-2x"></font-awesome-icon>
                            </a>
                        </b-tooltip>
                    </div>
                    <div class="mb-lg">
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
                        <img src="../../assets/made-with-bulma.png" width="150">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    export default {
        name: 'Footer',
        components: {BTooltip},
    }
</script>

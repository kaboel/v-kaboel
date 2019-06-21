<template>
    <section id="projects">
        <div class="columns">
            <div class="column has-text-centered mb-xl">
                <p class="title is-3">My Recent Works</p>
                <p class="subtitle is-5">Here are some of my recent works.</p>
                <flickity ref="flickity" :options="flickityOptions">
                    <div class="carousel-cell">
                        <div class="columns">
                            <div class="column is-8-desktop is-offset-2-desktop p-lg carousel-container">
                                <div class="box carousel-content">
                                    <b-tooltip label="Still unavailable" type="is-warning" position="is-left" animated>
                                        <a class="button is-rounded">
                                            <strong>
                                                <font-awesome-icon :icon="['fas', 'eye']"></font-awesome-icon>
                                                Take a peek
                                            </strong>
                                        </a>
                                    </b-tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div class="columns">
                            <div class="column is-8-desktop is-offset-2-desktop p-lg carousel-container">
                                <div class="box carousel-content">
                                    <b-tooltip label="Still unavailable" type="is-warning" position="is-left" animated>
                                        <a class="button is-rounded">
                                            <strong>
                                                <font-awesome-icon :icon="['fas', 'eye']"></font-awesome-icon>
                                                Take a peek
                                            </strong>
                                        </a>
                                    </b-tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                </flickity>
            </div>
        </div>
        <div class="columns">
            <div class="column has-text-centered mb-xl">
                <p class="subtitle is-4">
                    You can find more of my personal projects on
                </p>
                <b-tooltip label="Github" position="is-right" type="is-dark" animated>
                    <a href="https://github.com/kaboel" target="_blank">
                        <font-awesome-icon :icon="['fab', 'github']" class="has-text-dark fa-4x"></font-awesome-icon>
                    </a>
                </b-tooltip>
            </div>
        </div>
        <div class="columns">
            <div class="column is-11-desktop">
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <div class="tile is-child box pb-lg pt-lg has-background-light is-outlined">
                            <div class="columns level has-text-centered">
                                <div class="column is-8 level-item pt-lg pb-lg pr-xl pl-xl">
                                    <p class="title is-5">
                                        Interested in building something great together? We should have a chat. Coffee is on me.
                                    </p>
                                </div>
                                <div class="is-divider-vertical has-background-light" data-content="</>"></div>
                                <div class="column level-item pt-lg pb-lg pr-xl pl-xl">
                                    <b-tooltip label="Under Maintenance" position="is-bottom" type="is-warning" animated>
                                        <a class="button is-black is-outlined is-medium is-rounded" disabled>
                                            <strong>Start a project</strong>
                                        </a>
                                    </b-tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Flickity from 'vue-flickity';
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    export default {
        name: 'projects',
        components: {BTooltip, Flickity},
        data() {
            return {
                flickityOptions: {
                    prevNextButtons: false,
                    pageDots: true,
                    wrapAround: true
                }
            }
        },
        methods: {
            next() {
                this.$refs.flickity.next();
            },
            prev() {
                this.$refs.flickity.previous();
            }
        }
    }
</script>

<style scoped>
    .column.is-11-desktop {
        margin: 0 auto;
    }
    #projects {
        margin-bottom: -6.5rem;
        padding-top: 2rem;
    }
    .tile.box {
        border: 5px solid #0A0A0A !important;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
    }
    .carousel-cell {
        width: 100%;
        height: auto;
    }
    .carousel-container .box {
        height: 400px;
        padding: 175px 0;
    }
    .carousel-content a,
    .carousel-content button {
        filter: opacity(20%);
    }
    .carousel-content:hover a,
    .carousel-content:hover button {
        filter: opacity(100%);
    }


    @media(max-width: 1024px) {
        #projects {
            margin-bottom: 2rem;
        }
        .carousel-content a,
        .carousel-content button {
            display: initial;
        }
    }
</style>

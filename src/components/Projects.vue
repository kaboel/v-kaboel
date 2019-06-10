<template>
    <div id="projects">
        <div class="columns">
            <div class="column is-11-desktop">
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <div class="tile is-child box pt-lg pb-lg has-background-light is-outlined">
                            <div class="columns level has-text-centered">
                                <div class="column is-8 level-item pt-lg pb-lg pr-xl pl-xl">
                                    <p class="title is-5">
                                        Interested in building something with me? We should have a chat. Maybe some coffee, my treat this time.
                                    </p>
                                </div>
                                <div class="column is-4 level-item pt-lg pb-lg">
                                    <router-link class="button is-black is-outlined is-medium is-rounded" to="/project">
                                        Start a project
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'projects'
    }
</script>

<style scoped>
    .column {
        margin: 0 auto;
    }
    #projects {
        margin-bottom: -6.5rem;
    }
    .tile.box {
        border: 5px solid #000 !important;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
    }
</style>

<template>
    <section id="not-found" class="hero is-fullheight has-text-centered">
        <div class="hero-body has-text-black pt-sm ">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-three-fifths">
                        <div class="main">
                            <p class="title is-xl">
                                404
                            </p>
                            <p class="title is-1 ">
                                Not Found
                            </p>
                        </div>
                        <p class="title is-3 has-text-white">
                            Whoops! There's nothing here...
                        </p>
                        <p class="subtitle is-5 mt-lg">
                            Trust me, you dont want to be here.
                            <br>
                            Let's get you back on track.
                        </p>
                        <router-link class="button is-white is-outlined is-rounded mt-lg"
                                     to="/">
                            <strong>Get me out of here !</strong>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: '404'
    }
</script>

<style scoped>
    #not-found {
        background-color: #0A0A0A;
    }
    .main {
        max-width: 400px;
        margin: auto;
    }
    .title.is-xl {
        font-style: italic;
        font-size: 12rem;
        -webkit-text-fill-color: #0A0A0A;
        -webkit-text-stroke-width: 7px;
        -webkit-text-stroke-color: #202020;
    }
    .title.is-1 {
        text-align: left;
        margin-top: -3rem !important;
        letter-spacing: .0rem;
        color: #4f4f4f;
        font-style: italic;
        font-weight: bolder !important;
    }
    .title.is-3 {
        margin-top: 5rem !important;
    }
    .title{
        margin: 0 !important;
    }
    p.is-5, .subtitle {
        color: #fff;
        line-height: 2rem;
        letter-spacing: 2px;
    }
</style>

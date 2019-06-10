<template>
    <div id="skills">
        <div class="columns">
            <div class="column is-11-desktop">
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <div class="tile has-background-light is-child box">
                            <div class="has-text-centered watermark mt-md mb-lg">
                                <font-awesome-icon :icon="['fas', 'code']" class="fa-4x"></font-awesome-icon>
                                <p class="title is-5 mt-md">Front-end</p>
                            </div>
                            <div class="has-text-centered mb-md">
                                <div class="box">
                                    <p class="title is-6">Spoken Languages</p>
                                    <div class="tags is-centered">
                                        <span class="tag is-light is-medium">HTML</span>
                                        <span class="tag is-light is-medium">CSS</span>
                                        <span class="tag is-light is-medium">Sass</span>
                                        <span class="tag is-light is-medium">Less</span>
                                        <span class="tag is-light is-medium">Javascript</span>
                                        <span class="tag is-light is-medium">Typescript</span>
                                        <span class="tag is-light is-medium">Blade</span>
                                    </div>
                                </div>
                                <div class="box">
                                    <p class="title is-6">Familiar Frameworks</p>
                                    <div class="tags is-centered">
                                        <span class="tag is-light is-medium">Bootstrap</span>
                                        <span class="tag is-light is-medium">Bulma</span>
                                        <span class="tag is-light is-medium">Materialize</span>
                                        <span class="tag is-light is-medium">Angular Material</span>
                                        <span class="tag is-light is-medium">Jquery</span>
                                        <span class="tag is-light is-medium">Vue.js</span>
                                        <span class="tag is-light is-medium">Angular</span>
                                    </div>
                                </div>
                                <div class="box">
                                    <p class="title is-6">Tools Used</p>
                                    <div class="tags is-centered">
                                        <span class="tag is-light is-medium">Webstorm</span>
                                        <span class="tag is-light is-medium">Adobe Photoshop</span>
                                        <span class="tag is-light is-medium">GIMP</span>
                                        <span class="tag is-light is-medium">npm</span>
                                        <span class="tag is-light is-medium">Yarn</span>
                                        <span class="tag is-light is-medium">TravisCI</span>
                                        <span class="tag is-light is-medium">Terminal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="tile is-child has-background-light box">
                            <div class="has-text-centered watermark mt-md mb-lg">
                                <font-awesome-icon :icon="['fas', 'database']" class="fa-4x"></font-awesome-icon>
                                <p class="title is-5 mt-md">Database</p>
                            </div>
                            <div class="has-text-centered mb-md">
                                <div class="box">
                                    <p class="title is-6">Familiar SQL Databases</p>
                                    <div class="tags is-centered">
                                        <span class="tag is-light is-medium">MySQL</span>
                                        <span class="tag is-light is-medium">PostgreSQL</span>
                                    </div>
                                </div>
                                <div class="box">
                                    <p class="title is-6">Familiar NoSQL Databases</p>
                                    <div class="tags is-centered">
                                        <span class="tag is-light is-medium">MongoDB</span>
                                        <span class="tag is-light is-medium">Firestore</span>
                                    </div>
                                </div>
                                <div class="box">
                                    <p class="title is-6">Known ORM</p>
                                    <div class="tags is-centered">
                                        <span class="tag is-light is-medium">Eloquent</span>
                                        <span class="tag is-light is-medium">Doctrine</span>
                                        <span class="tag is-light is-medium">Sequelize</span>
                                    </div>
                                </div>
                                <div class="box">
                                    <p class="title is-6">Tools Used</p>
                                    <div class="tags is-centered">
                                        <span class="tag is-light is-medium">Datagrip</span>
                                        <span class="tag is-light is-medium">Terminal</span>
                                        <span class="tag is-light is-medium">pgAdmin</span>
                                        <span class="tag is-light is-medium">Studio 3T</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="tile is-child has-background-light box">
                            <div class="has-text-centered watermark mt-md mb-lg">
                                <font-awesome-icon :icon="['fas', 'cogs']" class="fa-4x"></font-awesome-icon>
                                <p class="title is-5 mt-md">Back-end</p>
                            </div>
                            <div class="has-text-centered mb-md">
                                <div class="box">
                                    <p class="title is-6">Spoken Languages</p>
                                    <div class="tags is-centered">
                                        <span class="tag is-light is-medium">PHP</span>
                                        <span class="tag is-light is-medium">Node.js</span>
                                        <span class="tag is-light is-medium">Python</span>
                                    </div>
                                </div>
                                <div class="box">
                                    <p class="title is-6">Familiar Frameworks</p>
                                    <div class="tags is-centered">
                                        <span class="tag is-light is-medium">Laravel</span>
                                        <span class="tag is-light is-medium">Codeigniter</span>
                                        <span class="tag is-light is-medium">Yii</span>
                                        <span class="tag is-light is-medium">Slim</span>
                                        <span class="tag is-light is-medium">Lumen</span>
                                        <span class="tag is-light is-medium">Express.js</span>
                                        <span class="tag is-light is-medium">Django</span>
                                    </div>
                                </div>
                                <div class="box">
                                    <p class="title is-6">Tools Used</p>
                                    <div class="tags is-centered">
                                        <span class="tag is-light is-medium">Phpstorm</span>
                                        <span class="tag is-light is-medium">Composer</span>
                                        <span class="tag is-light is-medium">Terminal</span>
                                        <span class="tag is-light is-medium">Scrutinizer</span>
                                    </div>
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
        name: 'skills'
    }
</script>

<style scoped>
    #skills {
        margin-top: -10rem;
        margin-bottom: 20rem;
    }
    @media(max-width: 1024px) {
        #skills {
            margin-top: inherit;
        }
    }
    .watermark{
        filter:opacity(60%);
    }
    .column {
        margin: 0 auto;
    }
    .tile.box {
        /*border: 3px solid #ddd !important;*/
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
    }
</style>

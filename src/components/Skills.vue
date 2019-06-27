<template>
    <section id="skills">
        <div class="has-text-centered mb-lg title">
            <p class="subtitle is-5">Here are some of the skills I acquire over the years.</p>
        </div>
        <div class="columns mb-xl">
            <div class="column is-11-desktop box p-lg p-lg has-background-light">
                <div class="columns">
                    <div class="column item">
                        <div class="has-text-centered mt-md mb-lg watermark">
                            <font-awesome-icon :icon="['fas', 'code']" class="fa-4x has-text-black"></font-awesome-icon>
                            <p class="title is-5 mt-md has-text-black">Front-end</p>
                        </div>
                        <div class="has-text-centered mb-md">
                            <div class="box">
                                <p class="title is-6">Spoken Languages</p>
                                <div class="tags is-centered">
                                    <span class="tag is-light is-medium">HTML</span>
                                    <span class="tag is-light is-medium">Javascript</span>
                                    <span class="tag is-light is-medium">CSS</span>
                                </div>
                            </div>
                            <div class="box">
                                <p class="title is-6">Familiar Frameworks</p>
                                <div class="columns">
                                    <div class="column">
                                        <font-awesome-icon :icon="['fab', 'css3']" class="fa-2x"></font-awesome-icon><br>
                                        <span class="title is-6">CSS</span>
                                        <div class="is-divider m-sm"></div>
                                        <div class="tags is-centered">
                                            <span class="tag is-light is-medium">Bootstrap</span>
                                            <span class="tag is-light is-medium">Bulma</span>
                                            <span class="tag is-light is-medium">Vuetify</span>
                                        </div>
                                    </div>
                                    <div class="is-divider-vertical p-sm mb-sm"></div>
                                    <div class="column">
                                        <font-awesome-icon :icon="['fab', 'js']" class="fa-2x"></font-awesome-icon><br>
                                        <span class="title is-6">Javascript</span>
                                        <div class="is-divider m-sm"></div>
                                        <div class="tags is-centered">
                                            <span class="tag is-light is-medium">Jquery</span>
                                            <span class="tag is-light is-medium">Vue.js</span>
                                            <span class="tag is-light is-medium">Vuex</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box">
                                <p class="title is-6">Dev Tools</p>
                                <div class="tags is-centered">
                                    <span class="tag is-light is-medium">WebStorm</span>
                                    <span class="tag is-light is-medium">GIMP</span>
                                    <span class="tag is-light is-medium">npm</span>
                                    <span class="tag is-light is-medium">Yarn</span>
                                    <span class="tag is-light is-medium">Terminal</span>
                                    <span class="tag is-light is-medium">GitHub</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="is-divider-vertical has-background-light" data-content="</>"></div>
                    <div class="column item">
                        <div class="has-text-centered watermark mt-md mb-lg">
                            <font-awesome-icon :icon="['fas', 'database']" class="fa-4x has-text-black"></font-awesome-icon>
                            <p class="title is-5 mt-md has-text-black">Database</p>
                        </div>
                        <div class="has-text-centered mb-md">
                            <div class="box">
                                <p class="title is-6">Familiar Databases</p>
                                <div class="columns">
                                    <div class="column">
                                        <span class="title is-6">Relational</span>
                                        <div class="is-divider m-sm"></div>
                                        <div class="tags is-centered">
                                            <span class="tag is-light is-medium">MySQL</span>
                                            <span class="tag is-light is-medium">Postgres</span>
                                        </div>
                                    </div>
                                    <div class="is-divider-vertical p-sm mb-sm"></div>
                                    <div class="column">
                                        <span class="title is-6">NoSQL</span>
                                        <div class="is-divider m-sm"></div>
                                        <div class="tags is-centered">
                                            <span class="tag is-light is-medium">Firestore</span>
                                            <span class="tag is-light is-medium">MongoDB</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box">
                                <p class="title is-6">Known ORM</p>
                                <div class="tags is-centered">
                                    <span class="tag is-light is-medium">Eloquent</span>
                                    <span class="tag is-light is-medium">DataMapper</span>
                                    <span class="tag is-light is-medium">Doctrine</span>
                                    <span class="tag is-light is-medium">Sequelize</span>
                                </div>
                            </div>
                            <div class="box">
                                <p class="title is-6">Dev Tools</p>
                                <div class="tags is-centered">
                                    <span class="tag is-light is-medium">DataGrip</span>
                                    <span class="tag is-light is-medium">SQLite</span>
                                    <span class="tag is-light is-medium">pgAdmin</span>
                                    <span class="tag is-light is-medium">Studio 3T/Robo 3T</span>
                                    <span class="tag is-light is-medium">Terminal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="is-divider-vertical has-background-light" data-content="</>"></div>
                    <div class="column item">
                        <div class="has-text-centered watermark mt-md mb-lg">
                            <font-awesome-icon :icon="['fas', 'cogs']" class="fa-4x has-text-black"></font-awesome-icon>
                            <p class="title is-5 mt-md has-text-black">Back-end</p>
                        </div>
                        <div class="has-text-centered mb-md">
                            <div class="box">
                                <p class="title is-6">Spoken Languages</p>
                                <div class="tags is-centered">
                                    <span class="tag is-light is-medium">PHP</span>
                                    <span class="tag is-light is-medium">Node.js</span>
                                </div>
                            </div>
                            <div class="box">
                                <p class="title is-6">Familiar Frameworks</p>
                                <div class="columns">
                                    <div class="column">
                                        <font-awesome-icon :icon="['fab', 'php']" class="fa-2x"></font-awesome-icon><br>
                                        <span class="title is-6">PHP</span>
                                        <div class="is-divider m-sm"></div>
                                        <div class="tags is-centered">
                                            <span class="tag is-light is-medium">Laravel</span>
                                            <span class="tag is-light is-medium">Lumen</span>
                                            <span class="tag is-light is-medium">CodeIgniter</span>
                                        </div>
                                    </div>
                                    <div class="is-divider-vertical p-sm mb-sm"></div>
                                    <div class="column">
                                        <font-awesome-icon :icon="['fab', 'node-js']" class="fa-2x"></font-awesome-icon><br>
                                        <span class="title is-6">Node.js</span>
                                        <div class="is-divider m-sm"></div>
                                        <div class="tags is-centered">
                                            <span class="tag is-light is-medium">Express.js</span>
                                            <span class="tag is-light is-medium">Meteor.js</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box">
                                <p class="title is-6">Dev Tools</p>
                                <div class="tags is-centered">
                                    <span class="tag is-light is-medium">PhpStorm</span>
                                    <span class="tag is-light is-medium">WebStorm</span>
                                    <span class="tag is-light is-medium">Postman</span>
                                    <span class="tag is-light is-medium">Composer</span>
                                    <span class="tag is-light is-medium">npm</span>
                                    <span class="tag is-light is-medium">Yarn</span>
                                    <span class="tag is-light is-medium">Terminal</span>
                                    <span class="tag is-light is-medium">GitHub</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-divider" data-content="</>"></div>
    </section>
</template>

<script>
    export default {
        name: 'skills'
    }
</script>

<style scoped>
    #skills {
        margin-top: -13rem;
    }
    #skills div.title p {
        color: #f5f5f5;
    }
    @media(max-width: 1024px) {
        #skills {
            margin-top: initial;
        }
        #skills div.title p {
            color: initial;
        }
    }
    .watermark{
        transition: all .2s ease-in-out;
        filter: opacity(25%);
        cursor: default;
    }
    .column {
        margin: 0 auto;
    }
    .column.box {
        border: 5px solid #0A0A0A !important;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
    }
    .column.item:hover .watermark {
        filter: opacity(100%);
    }
</style>

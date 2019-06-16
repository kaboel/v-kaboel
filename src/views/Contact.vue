<template>
    <form id="contact" autocomplete="off" @submit="submitForm($event)">
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
        <div class="container pr-lg pl-lg">
            <div class="hero has-text-centered">
                <div class="hero-body">
                    <h1 class="subtitle is-2">
                        I'm glad you are trying to reach out.
                        <br/>
                        Tell me what you need.
                    </h1>
                </div>
            </div>
            <div class="columns mt-md">
                <div class="column is-8-desktop is-10-mobile is-offset-2-desktop is-offset-1-mobile">
                    <div class="columns">
                        <div class="column field">
                            <label class="label is-medium" for="name">Name</label>
                            <div class="control has-icons-left has-icons-right">
                                <input name="surname" v-validate="'required:true|min:5'" type="text" v-model="form.surname"
                                       id="name" class="input is-medium" placeholder="e.g. Faiq Kaboel">
                                <span class="icon is-small is-left">
                                    <font-awesome-icon :icon="['far', 'smile-wink']"></font-awesome-icon>
                                </span>
                                <span class="icon is-small is-right" v-show="fields.surname && fields.surname.valid">
                                    <font-awesome-icon class="has-text-success"
                                                       :icon="['fas', 'check']"></font-awesome-icon>
                                </span>
                                <span class="icon is-small is-right" v-if="errors.has('surname')">
                                    <font-awesome-icon class="has-text-danger"
                                                       :icon="['fas', 'exclamation-circle']"></font-awesome-icon>
                                </span>
                                <p class="help has-text-danger">{{ errors.first('surname') }}</p>
                            </div>
                        </div>
                        <div class="column field">
                            <label class="label is-medium" for="email">Email Address</label>
                            <div class="control has-icons-left has-icons-right">
                                <input name="email" v-validate="'required:true|email'" type="email" v-model="form.email"
                                       id="email" class="input is-medium" placeholder="e.g. kaboel@example.com">
                                <span class="icon is-small is-left">
                                    <font-awesome-icon :icon="['fas', 'envelope']"></font-awesome-icon>
                                </span>
                                <span class="icon is-small is-right" v-show="fields.email && fields.email.valid">
                                    <font-awesome-icon class="has-text-success"
                                                       :icon="['fas', 'check']"></font-awesome-icon>
                                </span>
                                <span class="icon is-small is-right" v-if="errors.has('email')">
                                    <font-awesome-icon class="has-text-danger"
                                                       :icon="['fas', 'exclamation-circle']"></font-awesome-icon>
                                </span>
                            </div>
                            <p class="help has-text-danger">{{ errors.first('email') }}</p>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column field">
                            <span class="is-pulled-right mt-sm mr-sm" v-show="fields.message && fields.message.valid">
                                <font-awesome-icon class="has-text-success fa-lg"
                                                   :icon="['fas', 'check']"></font-awesome-icon>
                            </span>
                            <span class="is-pulled-right mt-sm mr-sm" v-if="errors.has('message')">
                                <font-awesome-icon class="has-text-danger fa-lg"
                                                   :icon="['fas', 'exclamation-circle']"></font-awesome-icon>
                            </span>
                            <label class="label is-medium" for="message">Message</label>
                            <div class="control">
                                <textarea name="message" v-validate="'required:true|min:100'" v-model="form.message"
                                          id="message" class="textarea is-medium"
                                          placeholder="e.g. Hey Faiq ! I really like your bio, I have this project in mind, we should talk about it. I look forward for us to meet. Coffee is on me !"
                                          rows="6"
                                ></textarea>
                            </div>
                            <p class="help has-text-danger">{{ errors.first('message') }}</p>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column has-text-centered">
                            <button type="submit"
                                    class="button is-black is-outlined is-medium is-rounded"
                                    :disabled="!isFormValid">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import {Validator} from "vee-validate";
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    export default {
        name: 'contacts',
        components: {BTooltip},
        data() {
            return {
                form: {
                    surname: null,
                    email: null,
                    message: null
                },
                $validator: Validator,
                navToggle: false,
                email: '',
                surname: '',
                message: ''
            }
        },
        mounted() {
            this.$validator.localize({
                en: {
                    attributes: {
                        email: 'Email Address',
                        surname: 'Name',
                        message: 'Message'
                    }
                }
            });
            this.$notification.open({
                duration: 10*1000,
                message: "This page is <b>Under Maintenance</b>.<br>Please visit again next time.",
                type: 'is-warning',
                position: 'is-bottom-right',
                hasIcon: true
            });
        },
        methods: {
            submitForm(e) {
                e.preventDefault();
                this.$snackbar.open({
                    duration: 10*1000,
                    message: "I'm sorry but this page is <b>Under Maintenance</b>.<br>Please visit and try again next time.",
                    type: 'is-warning',
                    position: 'is-bottom-right',
                    actionText: 'Ok'
                });
                this.resetForm();
            },
            resetForm() {
                Object.keys(this.form).forEach( (key) => {
                    this.form[key] = null;
                });
                this.$validator.reset();
            }
        },
        computed: {
            isFormValid() {
                return Object.keys(this.fields).every(field => {
                    return this.fields[field] && this.fields[field].valid;
                });
            }
        }
    }
</script>

<style scoped>
    @media (max-width: 1024px) {
        .f-control {
            margin-left: 7.5rem !important;
            margin-right: 7.5rem !important;
        }
    }
    @media (max-width: 768px) {
        .f-control {
            margin-left: 5rem !important;
            margin-right: 5rem !important;
        }
    }
    @media (max-width: 640px) {
        .f-control {
            margin-left: 2rem !important;
            margin-right: 2rem !important;
        }
    }
    .navbar {
        padding-left: 3rem !important;
        padding-right: 3rem !important;
    }
    nav a {
        font-family: Titillium Web, sans-serif;
    }
    .input[type=text]:focus,
    .input[type=email]:focus,
    textarea:focus {
        border-color: #8c8c8c;
        box-shadow: 0 0 0 0.125em rgba(219, 219, 219, 0.25);
    }
    .input[type=text]:focus.is-danger,
    .input[type=email]:focus.is-danger,
    textarea:focus.is-danger {
        border-color: #ff3860 !important;
    }
    .input[type=text]:focus.is-success,
    .input[type=email]:focus.is-success,
    textarea:focus.is-success {
        border-color: #23d160 !important;
    }
</style>

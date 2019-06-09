<template>
    <form id="contact">
        <HeaderContact />
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
                                <input name="surname" id="name" class="input is-medium" type="text" placeholder="e.g. Faiq Kaboel">
                                <span class="icon is-small is-left">
                                    <font-awesome-icon :icon="['far', 'smile-wink']"></font-awesome-icon>
                                </span>
                                <span class="icon is-small is-right is-hidden">
                                    <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                                </span>
                                <span class="icon is-small is-right is-hidden">
                                    <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
                                </span>
                                <p class="help has-text-grey-light">Field is required</p>
                            </div>
                        </div>
                        <div class="column field">
                            <label class="label is-medium" for="email">Email Address</label>
                            <div class="control has-icons-left has-icons-right">
                                <input name="email" id="email" class="input is-medium" type="email" placeholder="e.g. kaboel@example.com">
                                <span class="icon is-small is-left">
                                    <font-awesome-icon :icon="['fas', 'envelope']"></font-awesome-icon>
                                </span>
                                <span class="icon is-small is-right is-hidden">
                                    <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                                </span>
                                <span class="icon is-small is-right is-hidden">
                                    <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
                                </span>
                            </div>
                            <p class="help has-text-grey-light">Field is required</p>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column field">
                            <label class="label is-medium" for="message">Message</label>
                            <div class="control">
                                <textarea name="message" id="message" class="textarea is-medium"
                                          placeholder="e.g. Hey Faiq ! I really like your bio, I have this project in mind, we should talk about it. I look forward for us to meet. Coffee is on me !"
                                          rows="6"
                                ></textarea>
                            </div>
                            <p class="help has-text-grey-light">Field is required</p>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column has-text-centered">
                            <button type="submit" class="button is-black is-outlined is-medium is-rounded">
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
    import HeaderContact from "../components/layouts/HeaderContact";
    export default {
        name: 'contacts',
        components: {HeaderContact},
        methods: {
            sendMessage() {}
        }
    }
</script>

<style scoped>
    .input[type=text]:focus,
    .input[type=email]:focus,
    textarea:focus {
        border-color: #8c8c8c;
        box-shadow: 0 0 0 0.125em rgba(219, 219, 219, 0.25);
    }
    .is-hidden {
        display: none;
    }
</style>

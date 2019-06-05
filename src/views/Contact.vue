<template>
    <div id="contact">
        <Header />
        <h1>This is the contact page</h1>
        <Footer />
    </div>
</template>

<script>
    import { page } from 'vue-analytics';
    import Header from "../components/layouts/Header";
    import Footer from "../components/layouts/Footer";
    export default {
        name: 'contacts',
        components: {Footer, Header},
        methods: {
            track() {
                page('/contact');
            }
        }
    }
</script>

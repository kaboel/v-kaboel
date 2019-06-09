<template>
    <div id="home">
        <Header />
        <Greetings />
        <About />
        <Footer />
    </div>
</template>

<script>
    import Header from "../components/layouts/Header";
    import Footer from "../components/layouts/Footer";
    import Greetings from "../components/Greetings";
    import About from "../components/About";
    export default {
        name: 'home',
        components: {About, Greetings, Footer, Header}
    }
</script>

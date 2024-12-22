<template>
  <div id="home">
    <Header/>
    <Greetings/>
    <About/>
    <!-- <Skills/> -->
    <Projects/>
    <Footer/>
  </div>
</template>

<script>
  import Header from "../components/layouts/Header";
  import Footer from "../components/layouts/Footer";
  import Greetings from "../components/Greetings";
  import About from "../components/About";
  // import Skills from "../components/Skills";
  import Projects from "../components/Projects";

  export default {
    name: 'home',
    components: {
      Projects, 
      // Skills, 
      About, 
      Greetings, 
      Footer, 
      Header
    }
  }
</script>

<template>
  <section class="hero is-medium has-background-black">
    <div id="about" class="hero-body has-text-justified mt-sm">
      <div class="columns">
        <div class="column is-4-desktop is-offset-4-desktop is-10-mobile is-offset-1-mobile">
          <p class="title is-4 has-text-light">
            Hey there! I'm Faiq. Nice to e-meet you!
          </p>
          <p class="subtitle is-5 has-text-light mt-lg">
            I am a Full Stack Web Developer, design and build Websites and Web Apps.
            I am passionate in building robust and solid web application using the latest web stack technologies.
          <p class="subtitle is-5 has-text-light mt-sm">
            I have a very high level of curiosity, which maybe dangerous but also can be handy when it comes to a
            complex problem. I am also a confident and highly persistent engineer. I found an absolute satisfaction
            when I solve issues around what I love, the <b>Web</b>, it's almost like a fetish, but not sexual!
           <font-awesome-icon :icon="['fas', 'laugh-squint']" class="fa-lg"/>
          </p>
          <p class="subtitle is-5 has-text-light mt-sm">
            I am currently working for a SaaS Company based in The Netherlands, as a Frontend Engineer, while also
            pursuing a BASc of Informatics at State Polytechnic of Malang, Indonesia, and will graduate in early 2021.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: 'about'
    }
</script>

<style scoped>
  .columns {
    padding-bottom: 8rem !important;
  }

  @media (max-width: 1024px) {
    .columns {
      padding-bottom: 1rem !important;
    }
  }

  p.subtitle {
    line-height: 2rem;
  }
</style>

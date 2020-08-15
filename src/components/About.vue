<template>
  <section id="about" class="hero is-medium">
    <div class="hero-body has-background-black has-text-centered">
      <div class="columns">
        <div class="column is-8-desktop is-offset-2-desktop">
          <p class="title is-4 has-text-light">
            Hey, I'm Faiq. It's very nice to meet you.
          </p>
          <p class="subtitle is-5 has-text-light mt-lg">
            I am a Full Stack Web Developer, design and build Websites and Web Apps.
            I am passionate in building robust and solid websites using latest web stack technologies.
            I have a very high level of curiosity, which maybe dangerous but also can be handy when it comes to a
            complex project.
            I am also a confident, eager to find out something new, and perpetually improving
            my skill set in what I love, the <b>Web</b>. I am currently working for a SaaS Company based in The Netherlands while also
            pursuing a BASc of Informatics at State Polytechnic of Malang, and will graduate in early 2021.
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

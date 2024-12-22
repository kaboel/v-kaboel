<template>
  <section class="hero is-medium has-background-black">
    <div id="about" class="hero-body has-text-justified mt-sm">
      <div class="columns">
        <div class="column is-4-desktop is-offset-4-desktop is-10-mobile is-offset-1-mobile">
          <p class="title is-4 has-text-light">
            Hey there! I'm Faiq. Nice to e-meet you!
          </p>
          <p class="subtitle is-5 has-text-light mt-lg">
            I am a Full Stack Web Developer with a passion for designing and building Websites and Web Applications that are robust, scalable, and user-friendly. 
            I love creating innovative solutions using the latest web technologies and modern frameworks.
          </p>
          <p class="subtitle is-5 has-text-light mt-sm">
            My curiosity drives me to dive deep into solving complex problems. It might be risky at times, but it's also what makes tackling challenges so rewarding. 
            I approach my work with confidence and persistence. I find immense satisfaction in untangling tricky issues.
          </p>
          <p class="subtitle is-5 has-text-light mt-sm">
            Throughout my career, I've had the privilege of contributing to SaaS projects across various domains,
            including
            <b class="tag is-dark is-small has-background-info">Health</b> &nbsp;
            <b class="tag is-dark is-small has-background-success">Agriculture</b>   &nbsp;
            <b class="tag is-dark is-small has-background-primary">AI</b> and 
            <b class="tag is-light is-small has-background-warning">WFM</b>.
            These experiences have enabled me to develop innovative software solutions and play a key role in delivering impactful applications.
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

  @media (max-width: 1024px) {
    .columns {
      padding-bottom: 1rem !important;
    }
    p.title {
      font-size: 17px;
    }
    p.subtitle {
      font-size: 15px;
    }
  }

  p.subtitle {
    line-height: 2rem;
  }
</style>

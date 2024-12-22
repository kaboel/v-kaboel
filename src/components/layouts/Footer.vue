<template>
  <footer id="footer" class="footer has-background-black pb-xl">
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column is-8-desktop is-offset-2-desktop">
          <div class="column is-6-desktop is-offset-3-desktop is-8-mobile is-offset-2-mobile mb-xl">
            <p class="subtitle is-4 has-text-light has-text-centered is-italic" style="margin-bottom: 0 !important;">
              "Though I walk through the valley of the shadow of error,
              I shall fear no bugs, for
              <a class="stack-over" href="https://stackoverflow.com/users/7215223/faiq-kaboel" target="_blank">
                <font-awesome-icon :icon="['fab', 'stack-overflow']"/> StackOverflow
              </a> is with me"
            </p>
          </div>
          <div class="mb-lg mt-lg">
            <SocialButtons/>
          </div>
          <div>
            <img src="../../assets/made-with.png" width="300" usemap="#madeWith" alt="Made With Vue.js + Bulma">
            <map name="madeWith">
              <area target="_blank" alt="vuejs.org" title="" href="https://vuejs.org" coords="78,23,100,60,120,23"
                    shape="poly">
              <area target="_blank" alt="bulma.io" title="" href="https://bulma.io" coords="164,21,281,61" shape="rect">
            </map>
          </div>
          <div>
            <p class="has-text-white">
              <small>
                <font-awesome-icon icon="copyright"></font-awesome-icon>
                {{ `2K${getYear()}` }}.
                <a class="author-link" href="https://linkedin.com/in/faiqkaboel" target="_blank">Faiq Allam</a>.
                 All Rights Reserved.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="is-pulled-right pr-lg">
      <b-tooltip label="Back to top" type="is-light" animated>
        <a href="#" class="button is-black is-outlined has-text-light">
          <font-awesome-icon :icon="['fas', 'angle-double-up']" class="fa-2x"></font-awesome-icon>
        </a>
      </b-tooltip>
    </div>
  </footer>
</template>

<script>
  import SocialButtons from "../SocialButtons";
  import BTooltip from "buefy/src/components/tooltip/Tooltip";

  export default {
    name: 'Footer',
    components: {BTooltip, SocialButtons},
    methods: {
      getYear() {
        return new Date()
            .getFullYear()
            .toString()
            .substr(-2)
      }
    }
  }
</script>

<style>
  #footer {
    padding-top: 10rem;
  }
  .author-link {
    font-weight: bolder;
    color: #FFF !important;
    text-decoration: underline #FFF;
  }
  .stack-over {
    color: #ffa100;
  }
  .stack-over:hover {
    color: #ff7700;
  }
</style>

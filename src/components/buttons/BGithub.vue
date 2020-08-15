<template>
  <b-tooltip label="Visit my GitHub" type="is-light" animated>
    <a class="has-text-light pl-md pr-md" href="https://github.com/kaboel" target="_blank">
      <font-awesome-icon :icon="['fab', 'github']" class="fa-2x"></font-awesome-icon>
    </a>
  </b-tooltip>
</template>

<script>
    import BTooltip from "buefy/src/components/tooltip/Tooltip";

    export default {
        name: 'bGithub',
        components: {BTooltip}
    }
</script>

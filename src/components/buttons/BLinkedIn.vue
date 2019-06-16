<template>
    <b-tooltip label="Look me up on LinkedIn" type="is-light" animated>
        <a class="has-text-light pl-md pr-md" href="https://linkedin.com/in/faiqkaboel" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-2x"></font-awesome-icon>
        </a>
    </b-tooltip>
</template>

<script>
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    export default {
        name: 'bLinkedIn',
        components: {BTooltip}
    }
</script>

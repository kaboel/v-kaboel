<template>
    <b-tooltip label="Mail me at kaboel@kodeskillet.com" type="is-light" animated>
        <a class="has-text-light pl-md pr-md" href="mailto:faiq.kaboel@gmail.com">
            <font-awesome-icon :icon="['fas', 'envelope']" class="fa-2x"></font-awesome-icon>
        </a>
    </b-tooltip>
</template>

<script>
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    export default {
        name: 'bMail',
        components: {BTooltip}
    }
</script>

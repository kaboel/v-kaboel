<template>
    <b-tooltip label="Follow me on Twitter" type="is-light" animated>
        <a class="has-text-light pl-md pr-md">
            <font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x"></font-awesome-icon>
        </a>
    </b-tooltip>
</template>

<script>
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    export default {
        name: 'bTwitter',
        components: {BTooltip}
    }
</script>

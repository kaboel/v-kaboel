<template>
    <b-tooltip label="Add me on Facebook" type="is-light" animated>
        <a class="has-text-light pl-md pr-md" href="https://facebook.com/Im.TheConductor" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x"></font-awesome-icon>
        </a>
    </b-tooltip>
</template>

<script>
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    export default {
        name: 'bFacebook',
        components: {BTooltip}
    }
</script>

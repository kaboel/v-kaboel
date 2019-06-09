<template>
    <b-tooltip label="Chat me on Whatsapp" type="is-light" animated>
        <a class="has-text-light pl-md pr-md">
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="fa-2x"></font-awesome-icon>
        </a>
    </b-tooltip>
</template>

<script>
    import BTooltip from "buefy/src/components/tooltip/Tooltip";
    export default {
        name: 'bWhatsapp',
        components: {BTooltip}
    }
</script>

<template>
    <div id="social-buttons">
        <BTwitter />
        <BFacebook />
        <BLinkedIn />
        <BWhatsapp />
        <BGithub />
        <BMail />
    </div>
</template>

<script>
    import BTwitter from "./buttons/BTwitter";
    import BFacebook from "./buttons/BFacebook";
    import BLinkedIn from "./buttons/BLinkedIn";
    import BWhatsapp from "./buttons/BWhatsapp";
    import BGithub from "./buttons/BGithub";
    import BMail from "./buttons/BMail";
    export default {
        name: 'socialButtons',
        components: {BMail, BGithub, BWhatsapp, BLinkedIn, BFacebook, BTwitter}
    }
</script>

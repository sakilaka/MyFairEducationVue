<template>
    <div class="" style="margin-top: 110px;">
        <div class="calendly-inline-widget" data-url="https://calendly.com/edu-mayfair/15min"
            style="min-width: 320px; height: 700px;">
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        // Check if Calendly script is already added to avoid duplication
        if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
            const script = document.createElement("script");
            script.src = "https://assets.calendly.com/assets/external/widget.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }
};
</script>
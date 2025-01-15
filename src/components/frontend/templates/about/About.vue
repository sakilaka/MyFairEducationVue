<template>
    <div>
        <ChildComponent />
    </div>
</template>

<script>
import ChildComponent from '../../routes/about/About.vue';

export default {
    components: {
        ChildComponent,
    },
};
</script>
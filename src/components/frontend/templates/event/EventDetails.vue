<template>
    <div>
        <ChildComponent />
    </div>
</template>

<script>
import ChildComponent from '../../routes/event/EventDetails.vue';

export default {
    components: {
        ChildComponent,
    },
};
</script>
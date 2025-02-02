<template>
    <div>
        <ChildComponent />
    </div>
</template>

<script>
import ChildComponent from '../../routes/event/Event.vue';

export default {
    components: {
        ChildComponent,
    },
};
</script>
<template>
    <div>
        <ChildComponent />
    </div>
</template>

<script>
import ChildComponent from '../../routes/home/Home.vue';

export default {
    components: {
        ChildComponent,
    },
};
</script>
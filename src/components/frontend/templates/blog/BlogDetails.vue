<template>
    <div>
        <ChildComponent />
    </div>
</template>

<script>
import ChildComponent from '../../routes/blog/BlogDetails.vue';

export default {
    components: {
        ChildComponent,
    },
};
</script>
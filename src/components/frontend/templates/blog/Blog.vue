<template>
    <div>
        <ChildComponent />
    </div>
</template>

<script>
import ChildComponent from '../../routes/blog/Blog.vue';

export default {
    components: {
        ChildComponent,
    },
};
</script>
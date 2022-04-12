<template>
    <a href="{{ route }}" class="link-road">{{ link }}</a>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";

export default ({
    props: ['link', 'route'],
    name: 'NavLink',
    setup() {

    },
})
</script>
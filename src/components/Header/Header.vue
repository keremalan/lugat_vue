<template>
    <header>
        <div class="brand-logo">
            <img src="../../../public/brand-logo.png" alt="">
        </div>
        <nav>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">EXPLORE</a></li>
                <li><a href="#">PROFILE</a></li>
            </ul>
        </nav>
        <div class="user-action">
            <img src="../../../public/hamburger-icon.svg" alt="">
        </div>
    </header>
</template>
<script>import { defineComponent } from "vue";

export default defineComponent({
    name: 'Header',
    components: {

    },
    setup() {

    },
})
</script>
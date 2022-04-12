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
            <Sidebar/>
        </div>
    </header>
</template>
<script>
import { defineComponent } from "vue";
import NavLink from '../Header/NavLink.vue';
import Sidebar from '../Sidebar/Sidebar.vue';

export default defineComponent({
    name: 'Header',
    components: {
        NavLink, Sidebar
    },
    setup() {

    },
})
</script>
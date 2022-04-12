<template>
    <div id="sidebar" class="sidebar">
        <div class="sidebar-top">
            <span class="sidebar-top-span">Lugat</span>
            <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        </div>
        <nav class="navigation">
            <a href="#">NAV</a>
            <a href="#">NAV</a>
            <a href="#">NAV</a>
            <a href="#">NAV</a>
        </nav>
    </div>
    <span @click="openNav">
        <img src="../../../public/hamburger-icon.svg" alt="">
    </span>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'Sidebar',
    components: {

    },
    methods: {
        openNav() {
            document.getElementById("sidebar").style.display = "flex";
        },
        closeNav() {
            document.getElementById("sidebar").style.display = "none";
        }
    },
    setup() {

    },
})
</script>
<style>
.sidebar {
    height: 100%;
    width: 250px;
    display: none;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #000;
    overflow-x: hidden;
    padding-top: 30px;
}

.sidebar-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 32px;
    position: absolute;
}

.sidebar-top-span {
    color: white;
    margin-right: 120px;
    font-size: 1.2rem;
}

.closebtn {
    font-size: 1.6rem;
    display: inline-block;
}

.navigation {
    display: flex;
    flex-direction: column;
    margin-top: 48px;
}

.navigation a {
    padding: 16px 32px;
    opacity: 0.6;
}

.navigation a:hover {
    opacity: 1;
}
</style>
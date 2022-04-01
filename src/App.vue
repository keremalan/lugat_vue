<template>
  <router-view/>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import HomeView from "./views/HomeView.vue";
import ProjectsView from "./views/ProjectsView.vue";

export default defineComponent({
  name: 'App',
  components: {
    HomeView, ProjectsView
  },
  setup() {

  },
})
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
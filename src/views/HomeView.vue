<template>
  <Header/>
  <main>
  </main>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import Header from '../components/Header/Header.vue';
import Sidebar from '../components/Sidebar/Sidebar.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
    Sidebar,
  },
  setup() {

  },
})
</script>
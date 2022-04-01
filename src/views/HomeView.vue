<template>
  <Header/>
  <main>
    <h1>2</h1>
  </main>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import Header from '../components/Header/Header.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
  },
  setup() {

  },
})
</script>
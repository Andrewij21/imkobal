<template>
  <div id="app">
    <main class="main-wrapper">
      <Navbar />
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
<style>
</style>

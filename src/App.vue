<script setup>
import { RouterView } from 'vue-router';
import HeaderBanner from './components/HeaderBanner.vue';
import FooterBanner from './components/FooterBanner.vue';
</script>

<template>
  <HeaderBanner />
  <RouterView />
  <RouterView name="ProjectsList" />
  <RouterView name="TechStack" />
  <FooterBanner />
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>

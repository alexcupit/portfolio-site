<script setup>
import { RouterView } from "vue-router";
import HeaderBlock from "./components/HeaderBlock.vue";
import FooterBlock from "./components/FooterBlock.vue";
</script>

<template>
  <HeaderBlock />
  <RouterView />
  <RouterView name="Projects" />
  <RouterView name="TechStack" />
  <FooterBlock />
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

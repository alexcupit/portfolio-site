<script setup>
defineProps({
  projectName: String,
  shortDesc: String,
  cardImage: String,
  slug: String,
  labels: Array,
});
</script>

<template>
  <RouterLink :to="`/projects/${slug}`">
    <div
      v-motion-pop-visible-once
      class="btn btn-ghost normal-case hover:bg-base-100 font-normal h-min text-left"
    >
      <div class="card w-80 md:w-96 bg-base-100 shadow-xl m-5 h-96">
        <figure>
          <div class="relative">
            <img
              class="object-fill h-40 w-full blur-md absolute"
              :src="cardImage"
              :alt="projectName"
            />
            <img
              class="object-scale-down h-40 w-full p-2 blur-none"
              :src="cardImage"
              :alt="projectName"
            />
          </div>
        </figure>
        <div class="card-body">
          <h3 class="card-title text-primary">{{ projectName }}</h3>
          <p>
            {{ shortDesc }}
          </p>
          <div class="card-actions justify-end">
            <div
              v-for="(label, i) in labels"
              class="badge badge-primary"
              :key="`${label}-${i}`"
            >
              {{ label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

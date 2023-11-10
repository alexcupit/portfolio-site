<script setup>
const techStack = [
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Python',
  'Azure',
  'AWS',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Jest',
  'HTML5',
  'CSS',
  'React',
  'Vue.js',
  'Svelte',
  'Tailwind',
  'Firebase',
  'git',
  // "netlify",
];
</script>

<template>
  <br />
  <br />
  <div class="flex flex-col items-center w-full" id="tech-stack">
    <div class="bg-primary prose min-w-full">
      <h2 class="bg-primary text-center text-base-100 text-3xl py-5 min-w-full">
        Tech Stack
      </h2>
    </div>
  </div>

  <div class="bg-primary flex flex-wrap justify-center pb-5">
    <div
      v-for="(tech, i) in techStack"
      class="card w-32 bg-base-100 shadow-xl m-1"
      :key="`${tech}-${i}`"
    >
      <figure class="px-1 pt-1">
        <img :src="`/tech-stack/${tech}.svg`" :alt="tech" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center pb-5 pt-1">
        <h3 class="card-title mt-0 text-primary">{{ tech }}</h3>
      </div>
    </div>
  </div>
</template>

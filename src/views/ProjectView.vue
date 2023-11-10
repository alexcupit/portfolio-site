<script setup>
import { useRoute } from 'vue-router';

const currProject = useRoute().params.projectName;

const props = defineProps(['projects']);

const projDetails = props.projects.filter(
  (project) => project.slug === currProject
);

console.log(props.projects, 'props');

const [
  {
    projectName,
    shortDesc,
    longDesc,
    images,
    // techStack,
    githubURL,
    productionURL,
  },
] = projDetails;

const imageURLs = images.map((image) => image.url);

const toTop = () => {
  setTimeout(() => {
    window.scroll(0, 0);
  }, 0.1);
};
</script>

<template>
  <div class="flex flex-col items-center pt-5 bg-primary">
    <div class="carousel carousel-center max-w-md max-h-fit space-x-4">
      <div
        v-for="(src, i) in imageURLs"
        :id="`item${i + 1}`"
        :key="`item${i + 1}`"
        class="carousel-item relative w-full"
      >
        <img
          v-bind:src="src"
          class="object-fill w-full"
          :alt="`${projectName}: ${src.split('/')[2]}`"
        />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a :href="`#item${i + 1 - 1}`" class="btn btn-circle" @click="toTop"
            >❮</a
          >
          <a :href="`#item${i + 1 + 1}`" class="btn btn-circle" @click="toTop"
            >❯</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="text-center bg-primary py-5 text-neutral-content">
    <h2 class="text-5xl font-bold mb-5">{{ projectName }}</h2>
    <p>{{ shortDesc }}</p>
    <a v-if="productionURL" target="_blank" :href="productionURL">
      <button class="btn mx-1 sm:mx-5 mt-5 lowercase">See it in action</button>
    </a>
    <a v-if="githubURL" target="_blank" :href="githubURL">
      <button class="btn mx-1 sm:mx-5 mt-5 lowercase">See the code</button>
    </a>
  </div>
  <div
    class="flex flex-col items-center align-center justify-center py-10 text-center"
  >
    <p class="whitespace-pre-wrap w-4/5 md:w-3/5">
      {{ longDesc }}
    </p>
    <p
      v-if="projectName === 'Know It All'"
      class="whitespace-pre-wrap w-4/5 mt-5"
    >
      For more info and a demo video, take a look at
      <a
        class="link link-primary"
        target="_blank"
        href="https://northcoders.com/projects/jan-2023/know-it-all"
        >this blog on the Northcoders website.</a
      >
    </p>
  </div>
</template>

<style></style>

<script setup>
import { ref, onBeforeMount } from "vue";
import { fetchProjectsFromAirTable } from "../../api";
import ProjectCard from "./ProjectCard.vue";
// import { projects } from "../projects-manual";

const projects = ref([]);

onBeforeMount(() => {
  fetchProjectsFromAirTable().then((res) => {
    console.log(res, "res");
    projects.value = res;
    console.log(projects);
  });
});
</script>

<template>
  <div class="flex flex-col items-center" id="projects">
    <div class="text-center prose mt-10 mb-5">
      <h2 class="mt-5 text-3xl text-primary">Projects</h2>
      <p>
        Here are some projects that I've worked on as part of my training or in
        my spare time. Please take a look and let me know if you have any
        questions!
      </p>
    </div>
    <div id="proj-container" class="flex flex-wrap justify-center">
      <ProjectCard
        v-for="project in projects"
        :project-name="project.projectName"
        :slug="project.slug"
        :short-desc="project.shortDesc"
        :card-image="project.cardImage"
        :labels="project.labels"
      ></ProjectCard>
    </div>
  </div>
</template>

<style>
.no-hover:hover {
  background-color: none;
}
</style>

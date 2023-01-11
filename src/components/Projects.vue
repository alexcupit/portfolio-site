<script setup>
import { onMounted } from "vue";
import { RouterLink, useRoute } from "vue-router";
const currRoute = () => {
  return useRoute().path;
};

onMounted(() => {
  if (currRoute() === "/projects") {
    document
      .getElementById("projects")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
</script>

<template>
  <div class="flex flex-col items-center" id="projects">
    <div class="text-center prose mt-10 mb-5">
      <h2 class="mt-5 text-3xl text-primary">Projects</h2>
      <p>Here are some projects</p>
    </div>
    <div id="proj-container" class="flex flex-wrap justify-center">
      <!-- Portfolio -->
      <RouterLink to="/projects/portfolio">
        <div
          v-motion-pop-visible
          class="btn btn-ghost normal-case hover:bg-base-100 font-normal h-min text-left"
        >
          <div class="card card-compact w-96 bg-base-100 shadow-xl m-5 h-96">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h3 class="card-title">this.Portfolio</h3>
              <p>
                A place to compile my previous projects while also learning some
                new technologies
              </p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Vue.js</div>
                <div class="badge badge-outline"></div>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/projects/know-it-all">
        <div
          v-motion-pop-visible
          class="btn btn-ghost normal-case hover:bg-base-100 font-normal h-min text-left"
        >
          <div class="card card-compact w-96 bg-base-100 shadow-xl m-5 h-96">
            <figure>
              <img
                src="/KnowItAll/homepage.png"
                alt="Know It All homepage preview"
              />
            </figure>
            <div class="card-body">
              <h3 class="card-title">Know It All</h3>
              <p>A daily quizzing app, final bootcamp project</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Svelte</div>
                <div class="badge badge-outline">Mongo DB</div>
                <div class="badge badge-outline">Firebase</div>
                <div class="badge badge-outline">DaisyUI</div>
                <div class="badge badge-outline">Team Project</div>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/projects/know-it-all">
        <div
          v-motion-pop-visible
          class="btn btn-ghost normal-case hover:bg-base-100 font-normal h-min text-left"
        >
          <div class="card card-compact w-96 bg-base-100 shadow-xl m-5 h-96">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h3 class="card-title">NC News Frontend</h3>
              <p>A daily quizzing app, final bootcamp project</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/projects/know-it-all">
        <div
          v-motion-pop-visible
          class="btn btn-ghost normal-case hover:bg-base-100 font-normal h-min text-left"
        >
          <div class="card card-compact w-96 bg-base-100 shadow-xl m-5 h-96">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h3 class="card-title">NC News Backend</h3>
              <p>A daily quizzing app, final bootcamp project</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/projects/know-it-all">
        <div
          v-motion-pop-visible
          class="btn btn-ghost normal-case hover:bg-base-100 font-normal h-min text-left"
        >
          <div class="card card-compact w-96 bg-base-100 shadow-xl m-5 h-96">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h3 class="card-title">NC News Backend</h3>
              <p>A daily quizzing app, final bootcamp project</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.no-hover:hover {
  background-color: none;
}
</style>

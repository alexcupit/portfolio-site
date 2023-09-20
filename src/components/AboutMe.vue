<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="hero min-h-screen max-w-full"
    style="background-image: url('/mam-tor.jpeg')"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md flex flex-col items-center">
        <div class="avatar">
          <div
            class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          >
            <img src="/me-cropped.jpeg" />
          </div>
        </div>
        <br />
        <h1 class="mb-5 text-5xl font-bold">hello there</h1>
        <p class="mb-5">
          I'm Alex, a Full Stack Software Developer based in the Peak District.
          I've worked with external clients and in internal project teams
          covering a wide range of technologies and projects. From creating
          engaging UIs for webapps, to designing ETL pipelines in Azure for Data
          Engineering projects, and creating event-driven architecture in AWS.
        </p>
        <p class="mb-10">
          I previously worked in digital marketing and communications for six
          years in the charity sector, and enjoy combining my creative skills
          with knack for solving problems and attention to detail to deliver
          complex software projects.
        </p>
        <div class="fex-col items-center mx-5 my-5 md:mt-5 md:mb-5 md:flex-row">
          <RouterLink to="/projects">
            <button class="btn btn-primary lowercase m-5 w-32">Projects</button>
          </RouterLink>
          <RouterLink to="/tech-stack">
            <button class="btn btn-primary lowercase m-5 w-32">
              Tech Stack
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

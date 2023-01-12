<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="hero min-h-screen" style="background-image: url('/mam-tor.jpeg')">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-lg flex flex-col items-center">
        <div class="avatar">
          <div
            class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          >
            <img src="@/../public/me-cropped.jpeg" />
          </div>
        </div>
        <br />
        <h1 class="mb-5 text-5xl font-bold">hello there</h1>
        <p class="mb-5">
          I'm Alex, a Junior Software Developer based in the Peak District. I've
          recently graduated from the Northcoders Software Developer bootcamp
          where I thoroughly enjoyed learning new techonologies at a fast pace
          and combining these skills with creative projects.
        </p>
        <p class="mb-5">
          Before I found software development, I gained many years of
          professional experience working in the charity sector. I’m now looking
          forward to combining my new skills with my experience of working in
          digital marketing and communications.
        </p>
        <RouterLink to="/projects">
          <button class="btn btn-primary">Projects</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

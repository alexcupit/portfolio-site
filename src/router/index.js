import { createRouter, createWebHistory, useRoute } from "vue-router";
import HomeView from "../views/HomeView.vue";
import KnowItAll from "../components/KnowItAll.vue";
import AboutMe from "../components/AboutMe.vue";
import Projects from "../components/Projects.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: { default: AboutMe, Projects },
      // children: [
      //   { path: "", component: Projects },
      // ...other sub routes
      // ],
    },
    {
      path: "/projects",
      name: "projects",
      components: { default: AboutMe, Projects },
      // children: [{ path: "", component: Projects }],

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/AboutView.vue"),
      // component: AboutMe,
    },
    {
      path: "/projects/know-it-all",
      name: "know-it-all",
      component: KnowItAll,
    },
  ],
  // scrollBehavior(to, from, savedPosition) {
  //   // always scroll 10px above the element #main
  //   // useRoute();
  //   return {
  //     // could also be
  //     el: document.getElementById("projects"),
  //     // el: "#projects",
  //     top: -10,
  //     behavior: "smooth",
  //   };
  // },
});

export default router;

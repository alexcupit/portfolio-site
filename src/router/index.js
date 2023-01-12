import { createRouter, createWebHistory } from "vue-router";
import ProjectView from "../views/ProjectView.vue";
import AboutMe from "../components/AboutMe.vue";
import Projects from "../components/Projects.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: { default: AboutMe, Projects },
    },
    {
      path: "/projects",
      name: "projects",
      components: { default: AboutMe, Projects },
    },
    {
      path: "/projects/:projectName",
      name: "Project",
      component: ProjectView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.path === "/projects") {
      return {
        el: "#projects",
        top: 0,
        behavior: "smooth",
      };
    } else if (to.fullPath.includes("#item")) {
      return {
        // el: "#app",
        // selector: "#app",
        top: 0,
        behavior: "smooth",
      };
    } else {
      return {
        top: 0,
        behavior: "smooth",
      };
    }
  },
});

export default router;

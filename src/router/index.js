import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      main: () => import("../views/Home.vue")
    }
  },
  {
    path: "/guidelines",
    name: "Guidelines",
    components: {
      main: () => import("../views/Guidelines.vue")
    }
  },
  {
    path: "/components",
    name: "Components",
    components: {
      main: () => import("../views/Components.vue"),
      sidebar: () => import("../views/menus/ComponentsMenu.vue")
    }
  },
  {
    path: "/components/headings",
    name: "ComponentsHeadings",
    components: {
      main: () => import("../views/components/Headings.vue"),
      sidebar: () => import("../views/menus/ComponentsMenu.vue")
    }
  },
  {
    path: "/components/buttons",
    name: "ComponentsButtons",
    components: {
      main: () => import("../views/components/Buttons.vue"),
      sidebar: () => import("../views/menus/ComponentsMenu.vue")
    }
  },
  {
    path: "/components/cards",
    name: "ComponentsCards",
    components: {
      main: () => import("../views/components/Cards.vue"),
      sidebar: () => import("../views/menus/ComponentsMenu.vue")
    }
  },
  {
    path: "/examples",
    name: "Examples",
    components: {
      main: () => import("../views/Examples.vue")
    }
  },
  {
    path: "/get-started",
    name: "GetStarted",
    components: {
      main: () => import("../views/GetStarted.vue"),
      sidebar: () => import("../views/menus/GetStartedMenu.vue")
    }
  },
  {
    path: "/Accessibility",
    name: "Accessibility",
    components: {
      main: () => import("../views/Accessibility.vue"),
      sidebar: () => import("../views/menus/GetStartedMenu.vue")
    }
  },
  {
    path: "/Designers",
    name: "Designers",
    components: {
      main: () => import("../views/Designers.vue"),
      sidebar: () => import("../views/menus/GetStartedMenu.vue")
    }
  },
  {
    path: "/Developers",
    name: "Developers",
    components: {
      main: () => import("../views/Developers.vue"),
      sidebar: () => import("../views/menus/GetStartedMenu.vue")
    }
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;

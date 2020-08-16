import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      main: () => import("../views/Home.vue"),
      sidebar: () => import("../views/menus/GetStartedMenu.vue")
    }
  },
  {
    path: "/guidelines",
    name: "Guidelines",
    components: {
      main: () => import("../views/Guidelines.vue"),
      sidebar: () => import("../views/menus/GetStartedMenu.vue")
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
    path: "/components/typography",
    name: "ComponentsTypography",
    components: {
      main: () => import("../views/components/Typography.vue"),
      sidebar: () => import("../views/menus/ComponentsMenu.vue")
    }
  },
  {
    path: "/components/grid",
    name: "GridComponent",
    components: {
      main: () => import("../views/components/Grid.vue"),
      sidebar: () => import("../views/menus/ComponentsMenu.vue")
    }
  },
  {
    path: "/components/colors",
    name: "ComponentsColors",
    components: {
      main: () => import("../views/components/Colors.vue"),
      sidebar: () => import("../views/menus/ComponentsMenu.vue")
    }
  },
  {
    path: "/components/icons",
    name: "ComponentIcons",
    components: {
      main: () => import("../views/components/Icons.vue"),
      sidebar: () => import("../views/menus/ComponentsMenu.vue")
    }
  },
  {
    path: "/components/picto",
    name: "ComponentPictos",
    components: {
      main: () => import("../views/components/Pictograms.vue"),
      sidebar: () => import("../views/menus/ComponentsMenu.vue")
    }
  },

  {
    path: "/components/spacings",
    name: "ComponentsSpacings",
    components: {
      main: () => import("../views/components/Spacings.vue"),
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
    path: "/components/lists",
    name: "ComponentLists",
    components: {
      main: () => import("../views/components/Lists.vue"),
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
    path: "/components/input",
    name: "ComponentsInput",
    components: {
      main: () => import("../views/components/FormInput.vue"),
      sidebar: () => import("../views/menus/ComponentsMenu.vue")
    }
  },
  {
    path: "/components/link",
    name: "ComponentsLink",
    components: {
      main: () => import("../views/components/Link.vue"),
      sidebar: () => import("../views/menus/ComponentsMenu.vue")
    }
  },
  {
    path: "/components/infobox",
    name: "ComponentsInfoBox",
    components: {
      main: () => import("../views/components/InfoBox.vue"),
      sidebar: () => import("../views/menus/ComponentsMenu.vue")
    }
  },
  {
    path: "/examples",
    name: "Examples",
    components: {
      main: () => import("../views/Migrate.vue"),
      sidebar: () => import("../views/menus/GetStartedMenu.vue")
    }
  },
  {
    path: "/migration",
    name: "Migration",
    components: {
      main: () => import("../views/Migrate.vue"),
      sidebar: () => import("../views/menus/GetStartedMenu.vue")
    }
  },
  {
    path: "/component-detail",
    name: "ComponentDetail",
    components: {
      main: () => import("../views/ComponentLoader.vue")
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
    path: "/Developers",
    name: "Developers",
    components: {
      main: () => import("../views/Developers.vue"),
      sidebar: () => import("../views/menus/GetStartedMenu.vue")
    }
  },
  {
    path: "/Contribute",
    name: "Contribute",
    components: {
      main: () => import("../views/Contribute.vue"),
      sidebar: () => import("../views/menus/GetStartedMenu.vue")
    }
  },
  {
    path: "/Glossary",
    name: "Glossary",
    components: {
      main: () => import("../views/Glossary.vue"),
      sidebar: () => import("../views/menus/GetStartedMenu.vue")
    }
  },
  ///////////////////////////////////////////////////////////////
  // designer items here
  ///////////////////////////////////////////////////////////////
  {
    path: "/Designers",
    name: "Designers",
    components: {
      main: () => import("../views/Designers.vue"),
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

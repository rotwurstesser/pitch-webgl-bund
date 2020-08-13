<template>
  <div>
    <main-navi-part />
    <div class="mt-8">
      <h3
        class="px-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
        id="atoms-headline"
      >
        Design Tokens
      </h3>
      <div class="mt-1 space-y-1" role="group" aria-labelledby="atoms-headline">
        <router-link
          to="/design/icons"
          class="no-underline group flex items-center px-2 py-2 leading-5 rounded-md text-gray-900 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Icons
        </router-link>
      </div>
      <div class="mt-1 space-y-1" role="group" aria-labelledby="atoms-headline">
        <router-link
          to="/design/Box"
          class="no-underline group flex items-center px-2 py-2 leading-5 rounded-md text-gray-900 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Box
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import MainNaviPart from "../components/mainNaviPart.vue";

export default { components: { MainNaviPart } };
</script>

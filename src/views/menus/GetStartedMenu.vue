<template>
  <div>
    <main-navi-part />
    <div class="mt-8">
      <!-- Secondary navigation -->
      <h3
        class="px-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
        id="teams-headline"
      >
        Other stuff
      </h3>
      <div class="mt-1 space-y-1" role="group" aria-labelledby="teams-headline">
        <a
          href="#"
          class="no-underline group flex items-center px-3 py-2 leading-5 text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          <span class="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
          <span class="truncate">Stuff A</span>
        </a>

        <a
          href="#"
          class="no-underline group flex items-center px-3 py-2 leading-5 text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          <span class="w-2.5 h-2.5 mr-4 bg-teal-400 rounded-full"></span>
          <span class="truncate">Stuff 2</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import MainNaviPart from "../components/mainNaviPart.vue";
export default {
  components: { MainNaviPart }
};
</script>

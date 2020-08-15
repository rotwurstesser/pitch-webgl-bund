<template>
  <div>
    <div class="mt-8">
      <div class="mt-1 space-y-1" role="group" aria-labelledby="atoms-headline">
        <router-link
          to="/components/"
          class="no-underline group flex items-center px-2 py-1 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Introduction
        </router-link>
      </div>
      <h3
        class="mt-10 mb-4 px-2 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
        id="atoms-headline"
      >
        General
      </h3>
      <div class="mt-1 pl-2 space-y-1" role="group" aria-labelledby="atoms-headline">
        <router-link
          to="/components/typography"
          class="no-underline group flex items-center px-2 py-1 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Typography
        </router-link>
        <router-link
          to="/components/colors"
          class="no-underline group flex items-center px-2 py-1 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Colors
        </router-link>
        <router-link
          to="/components/spacings"
          class="no-underline group flex items-center px-2 py-1 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Spacings
        </router-link>
        <router-link
          to="/components/grid"
          class="no-underline group flex items-center px-2 py-1 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Grid
        </router-link>
        <router-link
          to="/components/icons"
          class="no-underline group flex items-center px-2 py-1 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Icons
        </router-link>
      </div>
    </div>

    <div class="mt-10">
      <h3
        class="px-2 mb-4 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
        id="cells-headline"
      >
        Components
      </h3>
      <div class="mt-1 pl-2 space-y-1" role="group" aria-labelledby="cells-headline">
        <router-link
          to="/components/cards"
          class="no-underline group flex items-center px-2 py-1 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Cards
        </router-link>
        <router-link
          to="/components/buttons"
          class="no-underline group flex items-center px-2 py-1 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Buttons
        </router-link>
        <router-link
          to="/components/lists"
          class="no-underline group flex items-center px-2 py-1 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Lists
        </router-link>
        <router-link
          to="/components/input"
          class="no-underline group flex items-center px-2 py-1 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Input
        </router-link>
        <router-link
          to="/components/infobox"
          class="no-underline group flex items-center px-2 py-1 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Infobox
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

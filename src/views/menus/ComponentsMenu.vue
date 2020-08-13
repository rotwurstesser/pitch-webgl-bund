<template>
  <div>
    <div class="mt-8">
      <h3
        class="px-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
        id="atoms-headline"
      >
        Design Tokens
      </h3>
      <div class="mt-1 space-y-1" role="group" aria-labelledby="atoms-headline">
        <router-link
          to="/components/headings"
          class="no-underline group flex items-center px-2 py-2 leading-5 rounded-md text-gray-900 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Headings
        </router-link>
        <router-link
          to="/components/colors"
          class="no-underline group flex items-center px-2 py-2 leading-5 rounded-md text-gray-900 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Colors
        </router-link>
        <router-link
          to="/components/spacings"
          class="no-underline group flex items-center px-2 py-2 leading-5 rounded-md text-gray-900 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Spacings
        </router-link>
        <router-link
          to="/components/grid"
          class="no-underline group flex items-center px-2 py-2 leading-5 rounded-md text-gray-900 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Grid
        </router-link>
        <router-link
          to="/components/icons"
          class="no-underline group flex items-center px-2 py-2 leading-5 rounded-md text-gray-900 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Icons
        </router-link>
      </div>
    </div>

    <div class="mt-8">
      <h3
        class="px-3 text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider"
        id="cells-headline"
      >
        Cells
      </h3>
      <div class="mt-1 space-y-1" role="group" aria-labelledby="cells-headline">
        <router-link
          to="/components/cards"
          class="no-underline group flex items-center px-2 py-2 leading-5 rounded-md text-gray-900 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Cards
        </router-link>
        <router-link
          to="/components/buttons"
          class="no-underline group flex items-center px-2 py-2 leading-5 rounded-md text-gray-900 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Buttons
        </router-link>
        <router-link
          to="/components/lists"
          class="no-underline group flex items-center px-2 py-2 leading-5 rounded-md text-gray-900 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Lists
        </router-link>
      </div>
    </div>
  </div>
</template>

<template>
  <div>
    <div class="mt-8">
      <div class="mt-1 space-y-1" role="group" aria-labelledby="atoms-headline">
        <router-link
          to="/guidelines#introduction"
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
      <div
        class="mt-1 pl-2 space-y-1"
        role="group"
        aria-labelledby="atoms-headline"
      >
        <router-link
          to="/guidelines#principles"
          class="cursor-not-allowed no-underline group flex items-center px-2 py-1 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Principles
        </router-link>
        <router-link
          to="/guidelines#typography"
          class="cursor-not-allowed no-underline group flex items-center px-2 py-1 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Typography
        </router-link>
        <router-link
          to="/guidelines#logotype"
          class="cursor-not-allowed no-underline group flex items-center px-2 py-1 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        >
          Logotype
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

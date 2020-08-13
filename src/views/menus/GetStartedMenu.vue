<template>
  <div>
    <div>
      <router-link
        to="/designers"
        class="no-underline group flex items-center px-2 py-2 leading-5 rounded-md text-gray-900 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
      >
        <svg
          class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
        Designers
      </router-link>

      <router-link
        to="/developers"
        class="no-underline group flex items-center px-2 py-2 leading-5 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
      >
        <svg
          class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        Developers
      </router-link>

      <router-link
        to="/accessibility"
        class="no-underline group flex items-center px-2 py-2 leading-5 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
      >
        <svg
          class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Accessibility
      </router-link>
    </div>
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

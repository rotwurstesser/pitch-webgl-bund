<template>
  <div>
    <router-link
      to="/designers"
      class="no-underline h-12 group flex items-center px-2 py-2 leading-5 rounded-md text-gray-700 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
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
      class="no-underline h-12 group flex items-center px-2 py-2 leading-5 rounded-md text-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
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
      to="/glossary"
      class="no-underline h-12 group flex items-center px-2 py-2 leading-5 rounded-md text-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
    >
      <svg-icon class="fill-current h-8 mr-5 text-gray-400" name="glossary" />
      Glossary
    </router-link>
    <router-link
      to="/accessibility"
      class="no-underline h-12 group flex items-center px-2 py-2 leading-5 rounded-md text-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
    >
      <svg-icon
        class="fill-current  h-16 mr-5 text-gray-400"
        name="accessible"
      />
      Accessibility
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

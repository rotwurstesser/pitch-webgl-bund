<template>
  <div>
    <header class="relative">
      <div
        class="flex items-center justify-between px-6 border-b border-gray-400"
      >
        <router-link to="/" class="ml-0">
          <svg-icon name="logo" class="h-24 my-4 w-auto fill-current" />
        </router-link>
        <div class="lg:hidden">
          <svg
            class="mr-3 h-8 w-8 text-gray-800 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        </div>
        <div class="hidden lg:block">
          <router-link to="/" class="font-bold no-underline h-100 p-8">
            Get started
          </router-link>
          <router-link
            to="/guidelines"
            class="font-bold no-underline h-100 p-8"
          >
            Guidelines
          </router-link>
          <router-link
            to="/components"
            class="font-bold no-underline h-100 p-8"
          >
            Components
          </router-link>
          <router-link to="/examples" class="font-bold no-underline h-100 p-8">
            Examples
          </router-link>
        </div>
      </div>
    </header>
    <div class="h-screen flex bg-white">
      <!-- Off-canvas menu for mobile -->
      <!--div class="lg:hidden">
        Mobile menu here
      </div-->
      <!-- Static sidebar for desktop -->
      <div class="sidebar hidden lg:flex lg:flex-shrink-0">
        <div class="flex flex-col w-64 border-r border-gray-400 pt-5 pb-4">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <div class="h-0 flex-1 flex flex-col overflow-y-auto relative">
            <!-- Sidebar Search --
            <div class="px-3 mt-5">
              <label for="search" class="sr-only">Search</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="mr-3 h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input id="search" class="form-input block w-full pl-9 sm:text-sm sm:leading-5" placeholder="Search">
              </div>
            </div-->

            <!-- Navigation -->
            <nav aria-label="sidebar-navigation" class="px-3 mt-6">
              <router-view name="sidebar"></router-view>
            </nav>
          </div>
          <!-- Sidebar footer -->
          <git-version />
          <nav
            aria-label="language-switcher"
            class="fixed bottom-0 flex justify-center w-64 bg-gray-200"
          >
            <btn variant="default" size="small">DE</btn>
            <btn variant="default" size="small">FR</btn>
            <btn variant="default" size="small">IT</btn>
            <btn variant="default" size="small">EN</btn>
          </nav>
        </div>
      </div>
      <main class="lg:text-lg flex flex-col w-0 flex-1 px-8 py-16 max-w-5xl">
        <router-view name="main" />
      </main>
    </div>
  </div>
</template>

<script>
import GitVersion from "./views/components/GitVersion.vue";
import Btn from "@/components/Btn.vue";

export default {
  data: () => ({
    images: {
      logo: require("./assets/logo.png")
    }
  }),
  components: {
    Btn,
    GitVersion
  }
};
</script>

<style scoped>
/* sorry for that, horrible precedence */
.sidebar .router-link-exact-active {
  @apply bg-gray-200;
}

.sidebar .router-link-exact-active svg {
  @apply text-gray-400;
}
</style>

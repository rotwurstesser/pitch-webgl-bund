<template>
  <div>
    <header class="relative">
      <div
        class="flex items-center justify-between px-6 border-b border-gray-400"
      >
        <router-link to="/" class="ml-0 logo-wrapper">
          <svg-icon
            name="logo"
            class="svg-icon svg-icon--logo my-6"
          />
        </router-link>
        <div class="lg:hidden">
          <svg
            class="mr-3 h-8 w-8 text-red-700 transition ease-in-out duration-150"
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
          <router-link to="/" class="main-navigation__item font-bold">
            Get started
          </router-link>
          <router-link to="/guidelines" class="main-navigation__item font-bold">
            Guidelines
          </router-link>
          <router-link to="/components" class="main-navigation__item font-bold">
            Components
          </router-link>
          <router-link to="/examples" class="main-navigation__item font-bold">
            Examples
          </router-link>
        </div>
      </div>
    </header>
    <div class="min-h-screen flex bg-white">
      <!-- Off-canvas menu for mobile -->
      <!--div class="lg:hidden">
        Mobile menu here
      </div-->
      <!-- Static sidebar for desktop -->
      <div class="sidebar hidden lg:flex lg:flex-shrink-0">
        <div class="flex flex-col w-64 border-r border-gray-400 pt-16 pb-4">
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
            <nav aria-label="sidebar-navigation" class="px-3">
              <router-view name="sidebar"></router-view>
            </nav>
          </div>
          <!-- Sidebar footer -->
          <git-version />
          <nav
            aria-label="language-switcher"
            class="fixed bottom-0 flex justify-center w-64"
          >
            <btn variant="grid" size="small">DE</btn>
            <btn variant="grid" size="small">FR</btn>
            <btn variant="grid" size="small">IT</btn>
            <btn variant="grid" size="small">EN</btn>
            <btn variant="grid" size="small">RM</btn>
          </nav>
        </div>
      </div>
      <main class="lg:text-lg flex flex-col w-0 flex-1 px-8 py-16 max-w-5xl ">
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

<style>
.main-navigation__item {
  @apply no-underline p-8 transition ease-in-out duration-150;
}

/* sorry for that, horrible precedence */
.main-navigation__item:hover,
.main-navigation__item.router-link-exact-active:hover {
  @apply text-red-600;
}
.main-navigation__item.router-link-exact-active {
  @apply text-red-700;
}

.sidebar .router-link-exact-active,
.sidebar .router-link-exact-active svg {
  @apply text-red-700 transition ease-in-out duration-150;
}

.sidebar .router-link-exact-active:hover,
.sidebar .router-link-exact-active:hover svg {
  @apply text-red-600;
}

/* keep the logo color consistent */
.logo-wrapper {
  color: #1A1919 !important;
}
</style>

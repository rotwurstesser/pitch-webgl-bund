<template>
  <div class="flex fixed github-footer w-64 bg-white border-t border-r border-gray-400">
    <div class="border-r border-gray-400 p-4 w-1/2">
      <a class="flex no-underline text-xs" href="">
        <span>Github</span>
      </a>
      <span class="block text-xs">Version 0.12.91</span>
    </div>
    <div class="p-3 w-1/2">
      <router-link
      to="/contribute"
      class="border-0 border-gray-400 block btn btn--tertiary btn--xs cursor-pointer inline-block"
    >
      Contribute
    </router-link>
    </div>
  </div>

</template>

<script>
export default {};
</script>
<style>
.github-footer {
  bottom: 38px;
}
</style>

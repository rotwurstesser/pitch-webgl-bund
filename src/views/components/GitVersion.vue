<template>
  <div class="fixed github-footer p-4 w-64">
    <a class="flex space-x-4 no-underline" href="">
      <svg-icon name="github" /> <span>Go to Github</span>
    </a>
    <span class="block">Version 0.12.91</span>
    <router-link
      to="/contribute"
      class="border-0 border-gray-400 block btn btn--tertiary btn--sm cursor-pointer inline-block"
    >
      Contribute
    </router-link>
  </div>
</template>

<script>
export default {};
</script>
<style>
.github-footer {
  bottom: 60px;
}
</style>

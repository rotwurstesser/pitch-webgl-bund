<template>
  <div class="fixed github-footer text-center w-64">
    <a class="flex justify-center space-x-4 no-underline" href="">
      <svg-icon name="github" /> <span>Github</span>
    </a>
    <span class="block">Version 0.16.6</span>
    <router-link
      to="/contribute"
      class="border-0 border-gray-400 block btn btn--tertiary btn--xs cursor-pointer inline-block"
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

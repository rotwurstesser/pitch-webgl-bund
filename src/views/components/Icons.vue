<template>
  <div class="space-y-6 max-w-4xl icons">
    <h1 class="font-bold mb-16">Icons</h1>
    <p>
      Icons are the bomb
    </p>
    <h2>Helpers</h2>
    <div class="flex flex-wrap space-x-4">
      <svg-icon class="text-red-600 fill-current" name="chevron-left" />
      <svg-icon class="text-red-600 fill-current" name="loading" />
      <svg-icon class="text-red-600 fill-current" name="close" />
    </div>
    <h2>Cantons</h2>
    <div class="flex flex-wrap space-x-4">
      <svg-icon name="bern" />
      <svg-icon name="glarus" />
      <svg-icon name="luzern" />
      <svg-icon name="schwyz" />
      <svg-icon name="zuerich" />
      <svg-icon name="uri" />
    </div>
  </div>
</template>
<style>
.icons .svg-icon {
  height: 24px;
  width: 24px;
}
</style>

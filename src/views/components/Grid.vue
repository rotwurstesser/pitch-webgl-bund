<template>
  <div class="space-y-6">
    <h1 class="font-bold mb-16">Grid</h1>
    A Grid is really cool to do so many things! We use css Grid
    <code-loader lang="html">
      <div class="grid grids-col-2 md:grid-cols-4 gap-4">
        <div class="h-48 bg-red-500"></div>
        <div class="h-48 bg-red-500"></div>
        <div class="h-48 bg-red-500"></div>
        <div class="h-48 bg-red-500"></div>
      </div>
    </code-loader>
  </div>
</template>

<script>
import CodeLoader from "@/components/CodeLoader.vue";

export default {
  components: {
    CodeLoader
  }
};
</script>

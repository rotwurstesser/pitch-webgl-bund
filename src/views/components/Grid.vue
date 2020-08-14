<template>
  <div class="space-y-6">
    <h1 class="font-bold mb-16">Grid</h1>
    The Styleguides grid system uses a grid container to define the flow of
    components inside. It's built with CSS-Grid and is fully responsive. Below
    is an example.
    <code-loader lang="html">
      <div class="grid grid-cols-2 xl:grid-cols-4 gap-4">
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

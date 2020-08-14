<template>
  <div class="space-y-6">
    <h1 class="font-bold mb-16">Buttons</h1>
    <code-loader lang="html">
      <div class="flex space-x-4">
        <btn variant="primary" size="large">
          Simple button
        </btn>
        <btn class="flex align-middle" variant="primary" size="large">
          <svg-icon class="mr-2 stroke-2" name="chevron-right" /> Icon button
        </btn>
      </div>
    </code-loader>
  </div>
</template>

<script>
import CodeLoader from "@/components/CodeLoader.vue";
import Btn from "@/components/Btn.vue";

export default {
  components: {
    Btn,
    CodeLoader
  }
};
</script>

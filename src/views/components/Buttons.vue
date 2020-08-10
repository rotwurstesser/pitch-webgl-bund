<template>
  <div class="space-y-6">
    <h1>Buttons</h1>
    <code-loader lang="html">
      <btn variant="primary" size="large">
        Simple button
      </btn>
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

<template>
  <div class="space-y-6">
    <h1 class="font-bold mb-16">Buttons</h1>
    <code-loader lang="html">
      <div class="flex space-x-4">
        <btn variant="primary" size="large">
          Primary button
        </btn>
        <btn disabled="true" variant="primary" size="large">
          Primary button
        </btn>
      </div>
    </code-loader>
    <code-loader lang="html">
      <div class="flex space-x-4">
        <btn class="flex align-middle" variant="secondary" size="large">
          Secondary button
        </btn>
        <btn disabled="true" class="flex align-middle" variant="secondary" size="large">
          Secondary button
        </btn>
      </div>
    </code-loader>
    <code-loader lang="html">
      <div class="flex space-x-4">
        <btn class="flex align-middle" variant="primary" size="large">
          <svg-icon class="mr-2 stroke-2" name="chevron-right" /> Icon button
        </btn>
        <btn disabled="true" class="flex align-middle" variant="primary" size="large">
          <svg-icon class="mr-2 stroke-2" name="chevron-right" /> Icon button
        </btn>
      </div>
    </code-loader>
    <code-loader lang="html">
      <div class="flex space-x-4">
        <btn class="flex align-middle" variant="secondary" size="large">
          <svg-icon class="mr-2 stroke-2" name="chevron-right" /> Icon button
        </btn>
        <btn disabled="true" class="flex align-middle" variant="secondary" size="large">
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

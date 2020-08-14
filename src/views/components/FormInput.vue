<template>
  <div class="space-y-6">
    <h1 class="font-bold mb-16">Input</h1>
    <code-loader lang="html">
      <form>
        <div class="mb-16">
          <p>Basic input</p>
          <form-input></form-input>
        </div>
        <div>
          <p>Input with icon</p>
          <div>
            <form-input variant="icon" placeholder="Suchbegriff eingeben" icon="search"></form-input>
          </div>
        </div>
      </form>
    </code-loader>
  </div>
</template>

<script>
import CodeLoader from "@/components/CodeLoader.vue";
import FormInput from "@/components/FormInput.vue";

export default {
  components: {
    FormInput,
    CodeLoader
  }
};
</script>

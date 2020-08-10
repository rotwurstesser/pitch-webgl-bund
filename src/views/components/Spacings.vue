<template>
  <div>
    <div
      class=" mb-12"
      v-for="(value, propertyName, index) in spacings"
      :key="index"
    >
      <div
        class="bg-gray-700 text-white inline-block"
        :class="'p-' + propertyName"
      ></div>
      <prism lang="css">
        {{ ".p-" + propertyName }}
      </prism>
    </div>
  </div>
</template>

<script>
import resolveConfig from "tailwindcss/resolveConfig";
const tailwind = require("../../../tailwind.config.js");

const mergedTailwind = resolveConfig(tailwind);

export default {
  data() {
    return {
      theme: mergedTailwind.theme
    };
  },
  computed: {
    spacings() {
      return this.theme.spacing;
    }
  }
};
</script>

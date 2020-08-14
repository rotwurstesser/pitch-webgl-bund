<template>
  <div>
    <div
      v-for="(colorName, index) in Object.keys(colors)"
      :key="index"
      class="flex flex-wrap"
    >
      <div
        v-for="color in Object.keys(colors[colorName])"
        :key="color"
        class="flex flex-col items-center mb-4 mr-4"
      >
        <div
          class="w-24 h-24 "
          :class="'bg-' + colorName + '-' + color"
        />
        <code class="py-3 text-xs">
          {{ colorName + "-" + color }}
        </code>
      </div>
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
    colors() {
      const colors = {};
      const keys = Object.keys(this.theme.colors);
      keys.forEach(key => {
        if (this.theme.colors[key] instanceof Object) {
          colors[key] = this.theme.colors[key];
        }
      });
      return colors;
    }
  }
};
</script>

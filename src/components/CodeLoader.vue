<template>
  <div>
    <span
      class="cursor-pointer text-sm text-blue-800"
      @click="isToggled = !isToggled"
    >
      {{ isToggled ? "Show" : "Hide" }} Code
    </span>
    <prism v-show="!isToggled" :language="lang">{{ code }}</prism>
  </div>
</template>

<script>
import Prism from "vue-prism-component";
export default {
  name: "CodeLoader",
  data() {
    return {
      code: "",
      isToggled: "false"
    };
  },
  components: {
    Prism
  },
  mounted() {
    let code = document.querySelector(this.reference);
    if (!code) return;

    let cleanedCode = code.outerHTML.replace(/ reference--(.*?)[\s]/g, " ");
    this.code = cleanedCode;
  },
  props: {
    reference: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      default: "HTML"
    }
  }
};
</script>

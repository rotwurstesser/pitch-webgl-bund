<template>
  <prism :language="lang">{{ code }}</prism>
</template>

<script>
import Prism from "vue-prism-component";
export default {
  name: "CodeLoader",
  data() {
    return {
      code: ""
    };
  },
  components: {
    Prism
  },
  mounted() {
    let code = document.querySelector(this.reference);
    if (!code) return;

    let cleanedCode = code.outerHTML.replace(/ (reference--).*?".*?"/g, "");
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

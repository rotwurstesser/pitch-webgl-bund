<template>
  <div class="relative">
    <input
      ref="codeinput"
      type="text"
      class="sr-only"
      v-model="code"
      id="myInput"
    />
    <span
      class="cursor-pointer text-sm text-blue-800"
      @click="isToggled = !isToggled"
    >
      {{ isToggled ? "Show" : "Hide" }} Code
    </span>
    <div v-show="!isToggled">
      <span
        class="absolute bg-white cursor-pointer right-0 text-blue-800 text-sm px-4 py-1"
        @click="copy"
      >
        copy
      </span>
      <prism :language="lang">{{ code }}</prism>
    </div>
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
    code.classList.remove(this.reference.replace(".", ""));

    this.code = code.outerHTML;
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
  },
  methods: {
    copy() {
      this.$refs.codeinput.select();
      this.$refs.codeinput.setSelectionRange(0, 99999); /*For mobile devices*/
      document.execCommand("copy");
    }
  }
};
</script>

<template>
  <div>
    <div class="relative border border-gray-300 p-8">
      <div ref="code">
        <slot></slot>
      </div>
      <div class="absolute right-0 bottom-0 pb-1">
        <input
          ref="copyinput"
          type="text"
          class="sr-only"
          v-model="code"
          id="myInput"
        />
        <a
          v-if="figmalink"
          :href="figmalink"
          target="_blank"
          class="border-0 border-gray-400 border-r btn btn--tertiary btn--xs cursor-pointer inline-block"
        >
          Open in Figma
        </a>
        <span
          class="border-0 border-gray-400 border-r btn btn--tertiary btn--xs cursor-pointer inline-block"
          @click="openInLoader"
        >
          Open element externally
        </span>
        <span
          class="btn btn--xs btn--tertiary cursor-pointer"
          @click="isToggled = !isToggled"
        >
          {{ isToggled ? "Show" : "Hide" }} Code
        </span>
      </div>
    </div>
    <div
      v-show="!isToggled"
      class="flex items-stretch border border-gray-300 border-t-0"
    >
      <prism :language="lang">{{ code }}</prism>
      <span class="btn btn--xs cursor-pointer whitespace-no-wrap" @click="copy">
        Copy code
      </span>
    </div>
  </div>
</template>

<script>
const beautify_html = require("js-beautify").html;
const beautify_options = { indent_size: 2 };

export default {
  name: "CodeLoader",
  data() {
    return {
      code: "",
      isToggled: "false"
    };
  },
  mounted() {
    this.code = beautify_html(this.$refs.code.innerHTML, beautify_options);
  },
  props: {
    lang: {
      type: String,
      default: "HTML"
    },
    figmalink: {
      type: String
    }
  },
  methods: {
    copy() {
      this.$refs.copyinput.select();
      this.$refs.copyinput.setSelectionRange(0, 99999); /*For mobile devices*/
      document.execCommand("copy");
    },
    openInLoader() {
      let routeData = this.$router.resolve({
        name: "ComponentDetail",
        query: { data: encodeURI(this.code) }
      });
      window.open(routeData.href, "_blank");
    }
  }
};
</script>

<style lang="postcss">
.language-html {
  margin: 0;
}
</style>

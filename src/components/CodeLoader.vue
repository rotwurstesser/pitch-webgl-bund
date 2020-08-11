<template>
  <div>
    <div class="relative border border-gray-300 p-8">
      <div ref="code">
        <slot></slot>
      </div>
      <div class="absolute right-0 bottom-0">
        <input
          ref="copyinput"
          type="text"
          class="sr-only"
          v-model="code"
          id="myInput"
        />
        <span
          class="btn btn--xs btn--tertiary cursor-pointer"
          @click="isToggled = !isToggled"
        >
          {{ isToggled ? "Show" : "Hide" }} Code
        </span>
        <span
          class="btn btn--xs btn--tertiary cursor-pointer"
          @click="openInLoader"
        >
          Open externally
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
export default {
  name: "CodeLoader",
  data() {
    return {
      code: "",
      isToggled: "false"
    };
  },
  mounted() {
    this.code = this.$refs.code.innerHTML;
  },
  props: {
    lang: {
      type: String,
      default: "HTML"
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

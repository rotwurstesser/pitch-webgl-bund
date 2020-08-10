<template>
  <div>
    <div ref="code" class="whitespace-pre-wrap">
      <slot></slot>
    </div>
    <div class="relative">
      <input
        ref="copyinput"
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
    }
  }
};
</script>

<template>
  <button
    class="btn"
    :class="[size ? `btn--${size}` : '', variant ? `btn--${variant}` : '']"
    v-bind:disabled="disabled"
  >
    <svg-icon v-if="variant == `link`" class="h-8 w-8 mr-2" name="arrow" />
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    size: {
      type: String,
      validator: prop => ["small", "large"].includes(prop)
    },
    variant: {
      type: String,
      validator: prop => ["default", "primary", "secondary", "link", "grid"].includes(prop)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

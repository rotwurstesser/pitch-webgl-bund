<template>
  <button
    class="btn"
    :class="[size ? `btn--${size}` : '', variant ? `btn--${variant}` : '']"
  >
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
      validator: prop => ["default", "primary", "secondary"].includes(prop)
    }
  }
};
</script>

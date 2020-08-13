<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {},
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

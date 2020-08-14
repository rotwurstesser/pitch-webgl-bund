<template>
  <div class="card flex flex-col justify-between items-start">
    <div>
      <slot></slot>
    </div>
    <slot name="footer" />
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

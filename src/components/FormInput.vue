<template>
  <div class="dsb-form-field">
    <label v-if="label">{{label}}</label>
    <input
      type="text"
      class="dsb-input"
      :class="[size ? `dsb-input--${size}` : '', variant ? `dsb-input--${variant}` : '']"
      :placeholder="[placeholder ? `${placeholder}` : '']"
    />
    <svg-icon v-if="icon" name="search" />
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    size: {
      type: String,
      validator: prop => ["small", "large"].includes(prop)
    },
    variant: {
      type: String,
      validator: prop => ["icon"].includes(prop)
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    icon: {
      type: String
    }
  }
};
</script>

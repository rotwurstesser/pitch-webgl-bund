<template>
  <div v-html="userProvidedHtml"></div>
</template>

<script>
export default {
  computed: {
    userProvidedHtml() {
      return decodeURI(this.$route.query.data);
    }
  }
};
</script>
<style>
header,
.sidebar {
  display: none;
}
</style>

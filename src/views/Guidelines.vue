<template>
  <div>
    <h1 class="font-bold mb-16">Guidelines</h1>
    <info-box class="my-8">
      <p>
        Some elements might not be fully available in this prototype. The
        Elements below serve as an example of how the documentation would look
        like.
      </p>
    </info-box>
    <h2>Logotype</h2>
    <p>
      The logotype consists of two parts, the wordmark "schweizerische
      eidgenossenschaft confederation suisse confederazione svizzera
      confederaziun svizra" and the white cross on a red background. The
      Wordmark needs to contain every Language as to reflect Switzerlands
      Diversity.
    </p>
    <svg-icon name="logo" class="h-24 my-4 w-auto fill-current" />
    <h2 class="mt-4">Key Principles</h2>
    <p class="mb-4">
      The Design System aims to align with the Guidelines of the Swiss
      Confederation and therefore our principles are:
    </p>
    <ul>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" /> diverse
      </li>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" /> flexible
      </li>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" /> conversational
      </li>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" /> connected
      </li>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" /> practical
      </li>
    </ul>
  </div>
</template>
<script>
import InfoBox from "../components/InfoBox.vue";
export default { components: { InfoBox } };
</script>

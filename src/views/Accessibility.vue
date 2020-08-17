<template>
  <div>
    <h1>Accessibility</h1>

    <info-box class="my-8">
      <p>
        Some elements might not be fully available or configured in this
        prototype. The Elements below serve as an example of how the
        documentation would look like.
      </p>
    </info-box>
    <p>
      Accessible design not only helps users with disabilities; it provides
      better user experiences for everyone. An accessible product should:
    </p>
    <ul class="my-4">
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" /> Give all users the same
        experience
      </li>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" /> Adapt to users and situations
      </li>
    </ul>
    <p>
      Our Styleguide strives to write perceivable, operable, and understandable
      patterns for all users—including those employing a screen reader or other
      assistive technology. Individually accessible elements and components are
      part of building accessible products. Use this guide to design and build
      products that anyone can use.
    </p>
    <h2 class="mt-6">Checklist</h2>
    <p>
      If you are unsure whether something is accessible our checklist can help
      you to test it.
    </p>
  </div>
</template>
<script>
import InfoBox from "../components/InfoBox.vue";
export default {
  components: { InfoBox }
};
</script>

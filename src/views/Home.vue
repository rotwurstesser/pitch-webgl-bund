<template>
  <div class="lg:w-2/3 space-y-6">
    <h1>
      Digital Design System for the Swiss Confederation
    </h1>
    <h2>
      Design your service based on the guidelines and components crafted for the
      Swiss confederation services, websites and applications.
    </h2>
    <p>
      Use this design system to keep consistency with the digital services of
      the Swiss Administration. Avoid repeating design or development work
      that’s already been done.
    </p>
    <btn variant="primary" size="large" @click.native="$router.push({ name : 'GetStarted'})">
      Get started
    </btn>
  </div>
</template>

<script>
import Btn from "@/components/Btn.vue";

export default {
  name: "Home",
  components: {
    Btn
  }
};
</script>

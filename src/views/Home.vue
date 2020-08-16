<template>
  <div class="space-y-6">
    <h1>
      Digital Design System for the Swiss Confederation
    </h1>
    <h2>
      Design your service based on the guidelines and components crafted for the
      Swiss confederation services, websites and applications.
    </h2>
    <p>
      This design system aims to deliver a comprehensive list and documentation
      of all elements governing the design of the Swiss Confederation. Use it to
      keep consistency with the digital services of the Swiss Administration.
      Avoid repeating design or development work that’s already been done.
    </p>
    <div class="grid grid-col lg:grid-cols-2 gap-6 pt-10">
      <div class="grid__item">
        <card class="space-y-6 h-full">
          <h2 class="mb-6">
            Informations for designers
          </h2>
          <p>
            You are a designer and you want to create a service, a website or an
            application for the Swiss Confederation.
          </p>
          <template v-slot:footer>
            <btn
              variant="primary"
              size="large"
              @click.native="$router.push({ name: 'Designers' })"
            >
              Start as a designer
            </btn>
          </template>
        </card>
      </div>
      <div class="grid__item">
        <card class="space-y-6 h-full">
          <h2 class="mb-6">
            Informations for developers
          </h2>
          <p>
            You are a developer and you want to build a service, a website or an
            application for the Swiss Confederation.
          </p>
          <template v-slot:footer>
            <btn
              variant="primary"
              size="large"
              @click.native="$router.push({ name: 'Developers' })"
            >
              Start as a developer
            </btn>
          </template>
        </card>
      </div>
      <div class="grid__item">
        <card class="space-y-6 h-full">
          <h2 class="mb-6">
            Contribute
          </h2>
          <p>
            Whether you are developer, designer or neither. Everyone can
            contribute to this styleguide.
          </p>
          <template v-slot:footer>
            <btn
              variant="primary"
              size="large"
              @click.native="$router.push({ name: 'Contribute' })"
            >
              Find out how to contribute
            </btn>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/Btn.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Btn,
    Card
  }
};
</script>

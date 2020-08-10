<template>
  <div class="lg:w-2/3 space-y-6">
    <h1>Get Started</h1>
    <h2>
      [Get Started introduction, general information about the guidelines and the components, how the design system is structured]
    </h2>
    <div class="grid grid-col lg:grid-cols-2 gap-6 pt-10">
      <div class="grid__item">
        <card class="space-y-6 ">
          <h2>
            Informations for designers
          </h2>
          <p>
            [Description here: what will designers find there]
          </p>
          <btn variant="primary" size="large" @click.native="$router.push({ name : 'Designers'})">
            Start as a designer
          </btn>
        </card>
      </div>
      <div class="grid__item">
        <card class="space-y-6 ">
          <h2>
            Informations for developers
          </h2>
          <p>
            [Description here: what will developers find there]
          </p>
          <btn variant="primary" size="large" @click.native="$router.push({ name : 'Developers'})">
            Start as a developer
          </btn>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Btn from "@/components/Btn.vue";

export default {
  components: {
    Card,
    Btn
  }
}
</script>
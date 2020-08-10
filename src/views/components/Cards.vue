<template>
  <div class="space-y-6">
    <h1>Card components</h1>

    <code-loader lang="html">
      <card class="space-y-6 ">
        <h2>
          Card Example
        </h2>
        <p>
          Card description
        </p>
        <btn variant="primary" size="large">
          Card button
        </btn>
      </card>
    </code-loader>
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
};
</script>

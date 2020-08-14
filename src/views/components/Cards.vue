<template>
  <div class="space-y-6">
    <h1 class="font-bold mb-16">Card components</h1>
    <p>The card component is mostly used for presenting short, article like, content segments. Use it to hightlight a specific part of the content or use it as a teaser to bring the user to another part of the site.

</p>

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

<template>
  <div class="space-y-6">
    <h1>Card components</h1>
    <p>
      The card component is mostly used for presenting short, article like,
      content segments. Use it to hightlight a specific part of the content or
      use it as a teaser to bring the user to another part of the site.
    </p>

    <code-loader lang="html">
      <card>
        <div class="space-y-6">
          <img src="@/assets/bund.png" alt="The Parliament Building in Bern" />
          <h2>The Parliament Building in Bern</h2>
          <p>
            The Parliament Building in Bern is at the heart of Swiss democracy.
            The parliament meets under its mighty dome, while the west and east
            wings are home to parts of the Swiss federal government and the
            federal administration. Outside, the expansive Bundesplatz
            (Parliament Square) is a lively meeting place for young and old
            alike.
          </p>
          <btn variant="primary" size="large">Go to Bundesplatz</btn>
        </div>
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

<!-- eslint-disable prettier/prettier  -->
<template>
  <div>
    <h1 class="font-bold mb-16">Developers</h1>
    <p>
      The Design System provides front-end developers & engineers a collection of reusable HTML and CSS classes, as well as guidance on how to use them. Adopting the library enables developers to use consistent markup, styles, and behavior in prototype and production work.
      <br />
      The Elements in the system will continually expanded upon. For the current list of elements you can go to the Components page.
      <br />
      If you would like to start using the system you have two options:
    </p>
    <info-box class="my-8">
      <p>These elements are unavailable in this prototype. It’s only an example of how the documentation could look like.</p>
    </info-box>
    <h2 class="my-5">Install the Design System via npm</h2>
    <p>
      For most projects (and to take advantage of the Styleguide's customization features), you'll want to install it via npm.
    </p>

    <prism language="bash">
      # Using npm
    </prism>
    <prism class="commented-text" language="bash">
      npm install swiss-style-guide
    </prism>
    <h2 class="my-5">Using the Designsystem via CDN</h2>
    <p>As not every Project has the right setup for the npm installation the package is also hosted on a CDN, in this case you will also need to reference the assets <br /></p>
    <h3 class="my-5">Fonts</h3>
    <prism class="commented-text" language="html">
      {{ linkfonts }}
    </prism>
    <h3 class="my-5">Icons</h3>
    <prism class="commented-text" language="html">
      {{ linkIcons }}
    </prism>
    <h3 class="my-5">Styleguide</h3>
    <prism class="commented-text" language="html">
      {{ linkBase }}
    </prism>
    <br />
    <div class="grid grid-col lg:grid-cols-2 gap-6 pt-10 mb-12">
      <div class="grid__item">
        <card class="space-y-6 h-full">
          <h2 class="mb-6">
            Guidelines
          </h2>
          <p>
            Discover the Guidelines to ensure you have an understanding of the rules governing the Swiss Styleguide and its Brand.
          </p>
          <template v-slot:footer>
            <router-link to="/guidelines">
              <btn variant="primary" size="large">
                Guidelines
              </btn>
            </router-link>
          </template>
        </card>
      </div>
      <div class="grid__item">
        <card class="space-y-6 h-full">
          <h2 class="mb-6">
            Components
          </h2>
          <p>
          Start to build an application for the Swiss Confederation or an organization close to it. By using the provided styles, assets and markup you can ensure a unified product and reduce tech debt.
          </p>
          <template v-slot:footer>
            <router-link to="/components">
              <btn variant="primary" size="large">
                Start as a developer
              </btn>
            </router-link>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import Btn from "../components/Btn.vue";
import Card from "../components/Card.vue";
import InfoBox from "../components/InfoBox.vue";
export default {
  components: { InfoBox, Card, Btn },
  computed: {
    linkfonts() {
      return "<link rel='stylesheet' href='https://cdnjs.com/swiss-styleguide-assets/font.css'/>";
    },
    linkIcons() {
      return "<link rel='stylesheet' href='https://cdnjs.com/swiss-styleguide-assets/[ICONNAME].svg'/>";
    },
    linkBase() {
      return "<link rel='stylesheet' href='https://cdnjs.com/swiss-styleguide'/>";
    }
  }
};
</script>
<style>
.commented-text {
  margin-top: -20px;
}
</style>

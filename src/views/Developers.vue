<!-- eslint-disable prettier/prettier  -->
<template>
  <div>
    <h1>Information for Developers</h1>
    <h2 class="font-medium">
      The Digital Design System of the Swiss Confederation provides guidelines, assets and documentation for Developers. Using the provided components, styles, assets and markup ensure a unified product and reduce tech debt.
    </h2>
    <h2>What the Design System covers</h2>
    <p>
      The Design System provides front-end developers & engineers a collection of reusable HTML and CSS classes, as well as guidance on how to use them. Adopting the library enables developers to use consistent markup, styles, and behavior in prototype and production work.
      <br />
      The Elements in the system will continually expanded upon. For the current list of elements you can go to the Components page.
      <br />
      If you would like to start using the system you have two options: Install the Design System via npm or using it via CDN.
    </p>
    <info-box class="my-8">
      <p>Some elements might not be fully available or configured in this prototype. The Elements below serve as an example of how the documentation would look like.</p>
    </info-box>
    <h2>Install the Design System via npm</h2>
    <p>
      For most projects (and to take advantage of the Styleguide's customization features), you'll want to install it via npm.
    </p>

    <prism class="commented-text" language="bash">
      npm install swiss-style-guide
    </prism>
    <h2>Using the Designsystem via CDN</h2>
    <p>As not every Project has the right setup for the npm installation the package is also hosted on a CDN, in this case you will also need to reference the assets <br /></p>
    <h3 class="mt-6">Styleguide</h3>
    <prism class="commented-text" language="html">
      {{ linkBase }}
    </prism>
    <h3 class="mt-6">Icons</h3>
    <prism class="commented-text" language="html">
      {{ linkIcons }}
    </prism>
    <h3 class="mt-6">Trial Fonts</h3>
    <prism class="commented-text" language="html">
      {{ linkfonts }}
    </prism>

    <h3 class="h2 font-bold mb-4 mt-12">Using fonts for production</h3>
    <p class="mb-3">
      For official projects, make a request for the official font package. Fullfill the form, and you will recieve the font files, a CDN link and an official license related to the domain name of your project on your email address.
    </p>
    <btn variant="link">Download Swiss Sign Trial version</btn>
    <btn variant="link" class="mb-12">Request official Swiss Sign package</btn>

    <h2>Explore and learn</h2>
    <div class="grid grid-col lg:grid-cols-3 gap-6 mb-12">
      <div class="grid__item">
        <card class="space-y-6 h-full">
          <h2>
            Guidelines
          </h2>
          <p>
            Discover the Guidelines to ensure you have an understanding of the rules governing the Swiss Styleguide and its Brand.
          </p>
          <template v-slot:footer>
            <btn variant="primary" size="large" @click.native="$router.push({ name: 'Guidelines' })">
              Discover Guidelines
            </btn>
          </template>
        </card>
      </div>
      <div class="grid__item">
        <card class="space-y-6 h-full">
          <h2>
            Components
          </h2>
          <p>
            Start to build an application for the Swiss Confederation or an organization close to it. By using the provided styles, assets and markup you can ensure a unified product and reduce tech debt.
          </p>
          <template v-slot:footer>
            <btn variant="primary" size="large" @click.native="$router.push({ name: 'Components' })">
              Discover the components
            </btn>
          </template>
        </card>
      </div>
      <div class="grid__item">
        <card class="space-y-6 h-full">
          <h2>
            Examples
          </h2>
          <p>
            Start with an already existing template or project and avoid repeating development work that’s already been done.
          </p>
          <template v-slot:footer>
            <btn variant="primary" size="large" @click.native="$router.push({ name: 'Examples' })">
              Discover the examples
            </btn>
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

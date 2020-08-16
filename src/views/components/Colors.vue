<template>
  <div class="space-y-6">
    <h1>Colors</h1>
    <h2>Default color palette</h2>
    <info-box class="my-8">
      <p>
        The Colors we picked on this page were extracted and adapted from the
        current Admin Pages, the adaptions and choice is experimental.
      </p>
    </info-box>
    <p>
      The Styleguide includes a generous palette of well-balanced, hand-picked
      colors that are meant for kicking off any new project.
    </p>
    <div
      v-for="(colorName, index) in Object.keys(colors)"
      :key="index"
      class="flex flex-wrap"
    >
      <div
        v-for="color in Object.keys(colors[colorName])"
        :key="color"
        class="flex flex-col items-center mb-4 mr-4"
      >
        <div class="w-24 h-24" :class="'bg-' + colorName + '-' + color" />
        <code class="py-3 text-xs">{{ colorName + "-" + color }}</code>
      </div>
    </div>

    <h2>Customizing Colors</h2>
    <p class="mt-0 mb-4 text-gray-600">
      In some cases, for example when building a website which is not conform
      with the default Swiss Confederacy design you might need new colors. If
      your project needs other colors you can easily add those by cloning the
      project and adapting the config.
    </p>

    <hr />

    <p>
      The
      <code>theme.colors</code> section of your
      <code>tailwind.config.js</code>
      file allows you to override Tailwind's default color palette.
    </p>
    <prism language="javascript">{{ code }}</prism>
    <p>
      By default these colors are automatically shared by the
      <code>textColor</code>, <code>borderColor</code>, and
      <code>backgroundColor</code> utilities, so the above configuration would
      generate classes like <code>.text-indigo</code>,
      <code>.border-blue</code>, and <code>.bg-red</code>.
    </p>

    <hr />

    <h3>Overriding the default colors</h3>
    <p>
      As described in the theme documentation, if you'd like to override the
      default color palette, you can do so using the
      <code>theme.colors</code> section of your
      <code>tailwind.config.js</code> file:
    </p>

    <prism language="javascript">{{ code_override }}</prism>

    <p>
      This will disable Tailwind's default color palette and generate classes
      like
      <code>.bg-indigo</code>, <code>.text-blue</code>, and
      <code>.border-red</code> instead.
    </p>

    <hr />

    <h3>Extending the default palette</h3>
    <p>
      As described in the theme documentation, if you'd like to extend the
      default color palette, you can do so using the
      <code>theme.extend.colors</code> section of your
      <code>tailwind.config.js</code> file:
    </p>

    <prism language="javascript">{{ code_extend }}</prism>

    <p>
      This will generate classes like
      <code>bg-regal-blue</code> in addition to all of Tailwind's default
      colors.
    </p>
  </div>
</template>

<script>
import InfoBox from "../../components/InfoBox.vue";
import resolveConfig from "tailwindcss/resolveConfig";
const tailwind = require("../../../tailwind.config.js");

const mergedTailwind = resolveConfig(tailwind);

const code = `// tailwind.config.js
  module.exports = {
    theme: {
      colors: {
        indigo: '#5c6ac4',
        blue: '#007ace',
        red: '#de3618',
      }
    }
  }`;

const code_override = `// tailwind.config.js
  module.exports = {
    theme: {
      colors: {
        indigo: '#5c6ac4',
        blue: '#007ace',
        red: '#de3618',
      }
    }
  }`;

const code_extend = `// tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        colors: {
          'regal-blue': '#243c5a',
        }
      }
    }
  }`;

export default {
  components: { InfoBox },
  data() {
    return {
      theme: mergedTailwind.theme,
      code: code,
      code_override: code_override,
      code_extend: code_extend
    };
  },
  computed: {
    colors() {
      const colors = {};
      const keys = Object.keys(this.theme.colors);
      keys.forEach(key => {
        if (this.theme.colors[key] instanceof Object) {
          colors[key] = this.theme.colors[key];
        }
      });
      return colors;
    }
  }
};
</script>

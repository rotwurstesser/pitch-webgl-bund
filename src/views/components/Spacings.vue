<template>
  <div>
    <div class="space-y-6">
      <h1>Spacings</h1>
      <info-box class="my-8">
        <p>
          Some elements might not be fully available or configured in this
          prototype. The Elements below serve as an example of how the
          documentation would look like.
        </p>
      </info-box>
      <p>
        The organization of space is key to every great design. Spatial systems,
        grids, and layouts provide rules that give your designs a consistent
        rhythm, constrain decision making, and help teams stay aligned. This
        foundational scaffolding is a requirement for all design systems. The
        examples below show the default spacing scale configured.
      </p>
      <h2>Spacing scale</h2>
      <p>
        By default, the Styleguide includes a generous and comprehensive numeric
        spacing scale. The values are proportional, so 16 is twice as much
        spacing as 8 for example. One spacing unit is equal to 0.25rem, which
        translates to 4px by default in common browsers.
      </p>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Pixels</th>
            <th class="hidden sm:table-cell">
              <span class="sr-only">Preview</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 0;"></div>
            </td>
          </tr>
          <tr>
            <td>px</td>
            <td>1px</td>
            <td>1px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 1px;"></div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>0.25rem</td>
            <td>4px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 0.25rem;"></div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>0.5rem</td>
            <td>8px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 0.5rem;"></div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>0.75rem</td>
            <td>12px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 0.75rem;"></div>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>1rem</td>
            <td>16px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 1rem;"></div>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>1.25rem</td>
            <td>20px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 1.25rem;"></div>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>1.5rem</td>
            <td>24px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 1.5rem;"></div>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>2rem</td>
            <td>32px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 2rem;"></div>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>2.5rem</td>
            <td>40px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 2.5rem;"></div>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>3rem</td>
            <td>48px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 3rem;"></div>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>4rem</td>
            <td>64px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 4rem;"></div>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>5rem</td>
            <td>80px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 5rem;"></div>
            </td>
          </tr>
          <tr>
            <td>24</td>
            <td>6rem</td>
            <td>96px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 6rem;"></div>
            </td>
          </tr>
          <tr>
            <td>32</td>
            <td>8rem</td>
            <td>128px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 8rem;"></div>
            </td>
          </tr>
          <tr>
            <td>40</td>
            <td>10rem</td>
            <td>160px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 10rem;"></div>
            </td>
          </tr>
          <tr>
            <td>48</td>
            <td>12rem</td>
            <td>192px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 12rem;"></div>
            </td>
          </tr>
          <tr>
            <td>56</td>
            <td>14rem</td>
            <td>224px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 14rem;"></div>
            </td>
          </tr>
          <tr>
            <td>64</td>
            <td>16rem</td>
            <td>256px</td>
            <td class="hidden sm:table-cell">
              <div class="h-4 bg-gray-400" style="width: 16rem;"></div>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Customizing Spacing</h2>
      <p class="text-gray-500 mb-8">
        Customizing the default spacing scale for your project.
      </p>

      <hr />

      <p>
        In some cases, for example when building a website which is not conform
        with the default Swiss Confederacy design you might need different
        Spacings. The theme.spacing section of your tailwind.config.js file
        allows you to override Tailwind's default spacing/sizing scale.
      </p>
      <prism language="javascript">{{ code }}</prism>
      <p>
        By default the spacing scale is shared by the padding, margin, width,
        and height utilities so the above configuration would generate classes
        like <code>.p-2</code>, <code>.mt-3</code>, <code>.w-5</code>,
        <code>.h-6</code>, ...etc.
      </p>

      <hr />

      <h3>Overriding the default spacing scale</h3>
      <p>
        As described in the theme documentation, if you'd like to override the
        default spacing scale, you can do so using the
        <code>theme.spacing</code> section of your
        <code>tailwind.config.js</code> file:
      </p>
      <prism language="javascript">{{ code_override }}</prism>
      <p>
        This will disable Tailwind's default spacing scale and generate classes
        like <code>.p-sm</code>, <code>.m-md</code>, <code>.w-lg</code> and
        <code>.h-xl</code> instead.
      </p>

      <hr />

      <h3>Extending the default spacing scale</h3>
      <p>
        As described in the theme documentation, if you'd like to extend the
        default spacing scale, you can do so using the
        <code>theme.extend.spacing</code> section of your
        <code>tailwind.config.js</code> file:
      </p>
      <prism language="javascript">{{ code_extend }}</prism>
      <p>
        This will generate classes like <code>.p-72</code>,
        <code>.m-84</code> and <code>.h-96</code> in addition to all of
        Tailwind's default spacing/sizing utilities.
      </p>
    </div>
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
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      }
    }
  }`;

const code_override = `// tailwind.config.js
  module.exports = {
    theme: {
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      }
    }
  }`;

const code_extend = `// tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        spacing: {
          '72': '18rem',
          '84': '21rem',
          '96': '24rem',
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
    spacings() {
      return this.theme.spacing;
    }
  }
};
</script>

<template>
  <div class="space-y-12 max-w-4xl">
    <div class="mb-8">
      <h1>Typography</h1>
      <info-box class="my-8">
        <p>
          Some elements might not be fully available or configured in this
          prototype. The Elements below serve as an example of how the
          documentation would look like.
        </p>
      </info-box>
    </div>

    <div class="mb-8">
      <h2>Headings</h2>
      <p class="mb-4">
        Headings serve to structure the content of a page. The higher the heading
        is in the structural hierarchy (e.g. H1), the more important it is, and
        the more weight is given to it by search engines such as Google. Generally
        speaking, not too many hierarchical levels should be used, as this has a
        negative impact on the clarity of the structure. Heading levels H1 through
        H4 are therefore clearly differentiated in their formatting (while levels
        H5 and H6 are merely defined pro forma).
      </p>
      <code-loader lang="html">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h4>Heading 5</h4>
        <h4>Heading 6</h4>
      </code-loader>
    </div>

    <div class="mb-8">
      <h2>Font Size</h2>
      <p class="mb-4 text-gray-500">Utilities for controlling the font size of an element.</p>
      <div class="mb-8 overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
        <table class="w-full text-left table-collapse">
          <thead>
            <tr>
              <th class="z-20 sticky top-0 text-sm font-semibold text-gray-700 bg-gray-100 p-0">
                <div class="p-2 border-b border-gray-300">Class</div>
              </th>
              <th class="z-20 sticky top-0 text-sm font-semibold text-gray-700 bg-gray-100 p-0">
                <div class="p-2 border-b border-gray-300">Properties</div>
              </th>
            </tr>
          </thead>
          <tbody class="align-baseline">
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap">.text-xs</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre">font-size: 0.75rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.text-sm</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-size: 0.875rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.text-base</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-size: 1rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.text-lg</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-size: 1.125rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.text-xl</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-size: 1.25rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.text-2xl</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-size: 1.5rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.text-3xl</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-size: 1.875rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.text-4xl</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-size: 2.25rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.text-5xl</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-size: 3rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.text-6xl</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-size: 4rem;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Usage</h3>
      <p class="mb-4">Control the font size of an element using the <code>.text-{size}</code> utilities.</p>
      <code-loader lang="html">
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-xs</p>
          <p class="text-xs truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-sm</p>
          <p class="text-sm truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-base</p>
          <p class="text-base truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-lg</p>
          <p class="text-lg truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-xl</p>
          <p class="text-xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-2xl</p>
          <p class="text-2xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-3xl</p>
          <p class="text-3xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.text-4xl</p>
          <p class="text-4xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div>
          <p class="text-sm text-gray-600">.text-5xl</p>
          <p class="text-5xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div>
          <p class="text-sm text-gray-600">.text-6xl</p>
          <p class="text-6xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </code-loader>
    </div>

    <div class="mb-8">
      <h2>Font Weight</h2>
      <p class="mb-4 text-gray-500">Utilities for controlling the font weight of an element.</p>
      <div class="mb-8 overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
        <table class="w-full text-left table-collapse">
          <thead>
            <tr>
              <th class="z-20 sticky top-0 text-sm font-semibold text-gray-700 bg-gray-100 p-0"><div class="p-2 border-b border-gray-300">Class</div></th>
              <th class="z-20 sticky top-0 text-sm font-semibold text-gray-700 bg-gray-100 p-0"><div class="p-2 border-b border-gray-300">Properties</div></th>
            </tr>
          </thead>
          <tbody class="align-baseline">
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap">.font-hairline</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre">font-weight: 100;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.font-thin</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-weight: 200;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.font-light</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-weight: 300;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.font-normal</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-weight: 400;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.font-medium</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-weight: 500;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.font-semibold</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-weight: 600;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.font-bold</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-weight: 700;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.font-extrabold</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-weight: 800;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.font-black</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">font-weight: 900;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Usage</h3>
      <p class="mb-4">Control the font weight of an element using the <code>.font-{weight}</code> utilities.</p>
      <code-loader lang="html">
        <div class="mb-6">
          <p class="text-sm text-gray-600">.font-hairline</p>
          <p class="font-hairline text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.font-thin</p>
          <p class="font-thin text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.font-light</p>
          <p class="font-light text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.font-normal</p>
          <p class="font-normal text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.font-medium</p>
          <p class="font-medium text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.font-semibold</p>
          <p class="font-semibold text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.font-bold</p>
          <p class="font-bold text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.font-extrabold</p>
          <p class="font-extrabold text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
        <div>
          <p class="text-sm text-gray-600">.font-black</p>
          <p class="font-black text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
        </div>
      </code-loader>
    </div>

    <div class="mb-8">
      <h2>Line Height</h2>
      <p class="mb-4 text-gray-500">Utilities for controlling the leading (line height) of an element.</p>

      <div class="mb-8 overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch lg:max-h-sm">
        <table class="w-full text-left table-collapse">
          <thead>
            <tr>
              <th class="z-20 sticky top-0 text-sm font-semibold text-gray-700 bg-gray-100 p-0"><div class="p-2 border-b border-gray-300">Class</div></th>
              <th class="z-20 sticky top-0 text-sm font-semibold text-gray-700 bg-gray-100 p-0"><div class="p-2 border-b border-gray-300">Properties</div></th>
            </tr>
          </thead>
          <tbody class="align-baseline">
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap">.leading-3</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre">line-height: .75rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.leading-4</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">line-height: 1rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.leading-5</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">line-height: 1.25rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.leading-6</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">line-height: 1.5rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.leading-7</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">line-height: 1.75rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.leading-8</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">line-height: 2rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.leading-9</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">line-height: 2.25rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.leading-10</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">line-height: 2.5rem;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.leading-none</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">line-height: 1;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.leading-tight</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">line-height: 1.25;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.leading-snug</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">line-height: 1.375;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.leading-normal</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">line-height: 1.5;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.leading-relaxed</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">line-height: 1.625;</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.leading-loose</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">line-height: 2;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Relative line-heights</h3>
      <p class="mb-4">
        Use the <code>leading-none</code>, <code>leading-tight</code>, <code>leading-snug</code>,
        <code>leading-normal</code>, <code>leading-relaxed</code>, and <code>leading-loose</code> 
        utilities to give an element a relative line-height based on its current font-size.
      </p>
      <code-loader lang="html">
        <div class="mb-6">
          <p class="text-sm text-gray-600">.leading-none</p>
          <p class="leading-none text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.leading-tight</p>
          <p class="leading-tight text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.leading-snug</p>
          <p class="leading-snug text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.leading-normal</p>
          <p class="leading-normal text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>
        </div>
        <div class="mb-6">
          <p class="text-sm text-gray-600">.leading-relaxed</p>
          <p class="leading-relaxed text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>
        </div>
        <div>
          <p class="text-sm text-gray-600">.leading-loose</p>
          <p class="leading-loose text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>
        </div>
      </code-loader>
    </div>
  </div>
</template>
<script>
import InfoBox from "../../components/InfoBox.vue";
export default { components: { InfoBox } };
</script>
<template>
  <div class="space-y-6">
    <h2>Grid Template Columns</h2>
    <p class="text-gray-500 mb-8">Utilities for specifying the columns in a grid layout.</p>
    <div class="mt-0 mb-16 border-t border-b border-gray-300 overflow-hidden relative">
      <div
        class="overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch lg:max-h-sm"
      >
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
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap">.grid-cols-1</td>
              <td
                class="p-2 font-mono text-xs text-blue-700 whitespace-pre"
              >grid-template-columns: repeat(1, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td
                class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200"
              >.grid-cols-2</td>
              <td
                class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200"
              >grid-template-columns: repeat(2, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td
                class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200"
              >.grid-cols-3</td>
              <td
                class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200"
              >grid-template-columns: repeat(3, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td
                class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200"
              >.grid-cols-4</td>
              <td
                class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200"
              >grid-template-columns: repeat(4, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td
                class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200"
              >.grid-cols-5</td>
              <td
                class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200"
              >grid-template-columns: repeat(5, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td
                class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200"
              >.grid-cols-6</td>
              <td
                class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200"
              >grid-template-columns: repeat(6, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td
                class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200"
              >.grid-cols-7</td>
              <td
                class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200"
              >grid-template-columns: repeat(7, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td
                class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200"
              >.grid-cols-8</td>
              <td
                class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200"
              >grid-template-columns: repeat(8, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td
                class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200"
              >.grid-cols-9</td>
              <td
                class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200"
              >grid-template-columns: repeat(9, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td
                class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200"
              >.grid-cols-10</td>
              <td
                class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200"
              >grid-template-columns: repeat(10, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td
                class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200"
              >.grid-cols-11</td>
              <td
                class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200"
              >grid-template-columns: repeat(11, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td
                class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200"
              >.grid-cols-12</td>
              <td
                class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200"
              >grid-template-columns: repeat(12, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td
                class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200"
              >.grid-cols-none</td>
              <td
                class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200"
              >grid-template-columns: none;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h3>Usage</h3>
    <p>
      Use the
      <code>grid-cols-{n}</code> utilities to create grids with
      <em>n</em> equally sized columns.
    </p>

    <code-loader lang="html">
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-gray-300 h-12 flex items-center justify-center">1</div>
        <div class="bg-gray-500 h-12 flex items-center justify-center">2</div>
        <div class="bg-gray-300 h-12 flex items-center justify-center">3</div>
        <div class="bg-gray-500 h-12 flex items-center justify-center">4</div>
        <div class="bg-gray-300 h-12 flex items-center justify-center">5</div>
        <div class="bg-gray-500 h-12 flex items-center justify-center">6</div>
        <div class="bg-gray-300 h-12 flex items-center justify-center">7</div>
        <div class="bg-gray-500 h-12 flex items-center justify-center">8</div>
        <div class="bg-gray-300 h-12 flex items-center justify-center">9</div>
      </div>
    </code-loader>

    <h3>Responsive</h3>
    <p>
      To control the columns of a grid at a specific breakpoint, add a
      <code>{screen}:</code>
      prefix to any existing grid-template-columns utility. For example, use
      <code>md:grid-cols-6</code>
      to apply the
      <code>grid-cols-6</code> utility at only medium screen sizes and above.
    </p>
    <hr>
    <h2>Grid Template Rows</h2>
    <p class="text-gray-500">Utilities for specifying the rows in a grid layout.</p>

    <div class="mt-0 border-t border-b border-gray-300 overflow-hidden relative">
      <div class="overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
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
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap">.grid-rows-1</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre">grid-template-rows: repeat(1, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.grid-rows-2</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">grid-template-rows: repeat(2, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.grid-rows-3</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">grid-template-rows: repeat(3, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.grid-rows-4</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">grid-template-rows: repeat(4, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.grid-rows-5</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">grid-template-rows: repeat(5, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.grid-rows-6</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">grid-template-rows: repeat(6, minmax(0, 1fr));</td>
            </tr>
            <tr>
              <td class="p-2 font-mono text-xs text-purple-700 whitespace-no-wrap border-t border-gray-200">.grid-rows-none</td>
              <td class="p-2 font-mono text-xs text-blue-700 whitespace-pre border-t border-gray-200">grid-template-rows: none;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h3>Usage</h3>
    <p>Use the <code>grid-rows-{n}</code> utilities to create grids with <em>n</em> equally sized rows.</p>
    <code-loader lang="html">
      <div class="h-64 grid grid-rows-3 grid-flow-col gap-4">
        <div class="bg-gray-300 flex items-center justify-center">1</div>
        <div class="bg-gray-500 flex items-center justify-center">2</div>
        <div class="bg-gray-300 flex items-center justify-center">3</div>
        <div class="bg-gray-500 flex items-center justify-center">4</div>
        <div class="bg-gray-300 flex items-center justify-center">5</div>
        <div class="bg-gray-500 flex items-center justify-center">6</div>
        <div class="bg-gray-300 flex items-center justify-center">7</div>
        <div class="bg-gray-500 flex items-center justify-center">8</div>
        <div class="bg-gray-300 flex items-center justify-center">9</div>
      </div>
    </code-loader>

    <h3>Responsive</h3>
    <p>To control the rows of a grid at a specific breakpoint, add a 
      <code>{screen}:</code> prefix to any existing grid-template-rows utility. 
      For example, use <code>md:grid-rows-6</code> to apply the <code>grid-rows-6</code> 
      utility at only medium screen sizes and above.
    </p>
  </div>
</template>

<script>
import CodeLoader from "@/components/CodeLoader.vue";

export default {
  components: {
    CodeLoader
  }
};
</script>

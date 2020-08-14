<template>
  <div class="space-y-6">
    <h1 class="font-bold mb-16">Lists</h1>
    <p>
      Lists let the user browse and interact with a continuous, vertical
      collection of items containing text, icons, and/or images among others.
    </p>
    <code-loader
      figmalink="https://www.figma.com/file/tohWKnhnuXCVoG1o1br2MK/Bund-Design-System?node-id=391%3A18"
      lang="html"
    >
      <ul>
        <li>List Element</li>
        <li>List Element</li>
        <li>List Element</li>
        <li>List Element</li>
      </ul>
    </code-loader>
    <p>
      With the use of icons Lists can be accentuated. It is recommended to use
      the Arrow icon for this.
    </p>
    <code-loader
      figmalink="https://www.figma.com/file/tohWKnhnuXCVoG1o1br2MK/Bund-Design-System?node-id=391%3A31"
      lang="html"
    >
      <ul>
        <li class="flex space-x-4">
          <svg-icon class="h-6 w-12" name="arrow" /> List Element
        </li>
        <li class="flex space-x-4">
          <ul class="ml-5">
            <li class="flex space-x-4">
              <svg-icon class="h-6 w-12" name="arrow" /> Second Level List
              Element
            </li>
          </ul>
        </li>
        <li class="flex space-x-4">
          <svg-icon class="h-6 w-12" name="arrow" /> List Element
        </li>
        <li class="flex space-x-4">
          <svg-icon class="h-6 w-12" name="arrow" /> List Element
        </li>
      </ul>
    </code-loader>
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

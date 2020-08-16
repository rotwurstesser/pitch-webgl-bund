<template>
  <div class="space-y-6 mb-24">
    <h1 class="font-bold mb-16">Text Input</h1>
    <p>
      Text Inputs are there to catch a small amount of data from users, if you
      expect larger amounts of data use a Textarea. Keep in mind to always use a
      label even if its not visible, for accessibility reasons. You can hide it
      as in the example "Input with icon" below.
    </p>
    <code-loader
      figmalink="https://www.figma.com/file/tohWKnhnuXCVoG1o1br2MK/Bund-Design-System?node-id=385%3A169"
      lang="html"
    >
      <form>
        <form-input label="First name"></form-input>
      </form>
    </code-loader>
    <h2 class="my-5">Input States</h2>
    <p>
      As Inputs can be disabled, invalid and more we provide different states
      out of the box
    </p>
    <code-loader
      figmalink="https://www.figma.com/file/tohWKnhnuXCVoG1o1br2MK/Bund-Design-System?node-id=388%3A4620"
      lang="html"
    >
      <form>
        <form-input
          class="dsb-input--error"
          label="Error in the input"
        ></form-input>
        <span class="text-xs text-red-400 mb-5 block">
          E-Mail or Password seem to be wrong
        </span>
        <form-input
          class="dsb-input--disabled  mb-5"
          label="Disabled input"
        ></form-input>
      </form>
    </code-loader>

    <h2 class="my-5">Input with icon</h2>
    <p>
      Text Inputs can be used with icons. We suggest using these inputs as
      search to navigate large amounts of complex content.
    </p>
    <code-loader
      figmalink="https://www.figma.com/file/tohWKnhnuXCVoG1o1br2MK/Bund-Design-System?node-id=385%3A0"
      lang="html"
    >
      <form>
        <form-input
          :label-hidden="true"
          label="search the page"
          variant="icon"
          placeholder="Suchbegriff eingeben"
          icon="search"
        ></form-input>
      </form>
    </code-loader>
  </div>
</template>

<script>
import CodeLoader from "@/components/CodeLoader.vue";
import FormInput from "@/components/FormInput.vue";

export default {
  components: {
    FormInput,
    CodeLoader
  }
};
</script>

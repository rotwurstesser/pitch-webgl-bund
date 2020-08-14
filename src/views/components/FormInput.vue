<template>
  <div class="space-y-6">
    <h1 class="font-bold mb-16">Input</h1>
    <p>
      Inputs are there to catch data from Users, if you except more data then
      please use a Textbox component
    </p>
    <code-loader lang="html">
      <form>
        <form-input label="First name"></form-input>
      </form>
    </code-loader>
    <p>
      Inputs can be used with icons, they are especially useful to search
      content which is an important navigation element on the pages of the bund.
      Keep in mind to always use a label even if its not visible, for
      accessibility reasons, you can hide it as in the example below
    </p>
    <code-loader lang="html">
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

<template>
  <div class="space-y-6">
    <h1>Buttons</h1>
    <p>
      Buttons communicate actions that users can take. They are typically placed
      throughout your UI, in places like:
    </p>
    <ul>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" />
        Dialogs
      </li>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" />
        Modal windows
      </li>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" />
        Forms
      </li>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" />
        Cards
      </li>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" />
        Toolbars
      </li>
    </ul>
    <p>
      Buttons can be used with or without icons, the icon has to be one of the
      "Action Icons" the Styleguide provides. If you feel there is an icon
      missing feel free to
      <router-link to="/contribute">
        contribute
      </router-link>
      it.
    </p>
    <code-loader lang="html">
      <div class="flex space-x-4">
        <btn variant="primary" size="large">
          Primary button
        </btn>
        <btn disabled="true" variant="primary" size="large">
          Primary button
        </btn>
      </div>
    </code-loader>
    <code-loader lang="html">
      <div class="flex space-x-4">
        <btn class="flex align-middle" variant="secondary" size="large">
          Secondary button
        </btn>
        <btn
          disabled="true"
          class="flex align-middle"
          variant="secondary"
          size="large"
        >
          Secondary button
        </btn>
      </div>
    </code-loader>
    <code-loader lang="html">
      <div class="flex space-x-4">
        <btn class="flex align-middle" variant="primary" size="large">
          <svg-icon class="mr-2 stroke-2 text-white" name="cogaction-white" />
          Icon button
        </btn>
        <btn
          disabled="true"
          class="flex align-middle"
          variant="primary"
          size="large"
        >
          <svg-icon class="mr-2 stroke-2 text-white" name="cogaction" /> Icon
          button
        </btn>
      </div>
    </code-loader>
    <code-loader lang="html">
      <div class="flex space-x-4">
        <btn class="flex align-middle" variant="secondary" size="large">
          <svg-icon class="mr-2 stroke-2 text-white" name="cogaction-red" />
          Icon button
        </btn>
        <btn
          disabled="true"
          class="flex align-middle"
          variant="secondary"
          size="large"
        >
          <svg-icon class="mr-2 stroke-2 text-white" name="cogaction" /> Icon
          button
        </btn>
      </div>
    </code-loader>
  </div>
</template>

<script>
import CodeLoader from "@/components/CodeLoader.vue";
import Btn from "@/components/Btn.vue";

export default {
  components: {
    Btn,
    CodeLoader
  }
};
</script>

<template>
  <div class="space-y-6 max-w-4xl">
    <h1 class="font-bold mb-16">Pictograms</h1>
    <info-box class="my-8">
      <p>
        The Pictos we picked on this page were extracted from some Cantonal
        flags, the choice is random and serves as an example.
      </p>
    </info-box>
    <p>
      Pictographs are used in writing and graphic systems in which the
      characters are to a considerable extent pictorial in appearance. The
      symbolic Language we picked represents the Diversity of Siwtzerland and is
      therefore a Keyvisual to convey the Brand of the Swiss Confederation.
    </p>
    <code-loader
      figmalink="https://www.figma.com/file/tohWKnhnuXCVoG1o1br2MK/Bund-Design-System?node-id=430%3A0"
      lang="html"
    >
      <svg-icon class="h-56  w-auto" name="cantons" />
    </code-loader>
    <code-loader
      figmalink="https://www.figma.com/file/tohWKnhnuXCVoG1o1br2MK/Bund-Design-System?node-id=431%3A2"
      lang="html"
    >
      <svg-icon class="h-56 w-auto" name="crosses" />
    </code-loader>
    <h2>Example Usage</h2>
    <code-loader
      figmalink="https://www.figma.com/file/tohWKnhnuXCVoG1o1br2MK/Bund-Design-System?node-id=433%3A0"
      lang="html"
    >
      <div class="p-24 relative">
        <div class="relative max-w-6xl mt-10">
          <svg-icon
            class="-translate-y-1/2 absolute h-24 right-0 top-0 transform translate-x-1/2 w-auto"
            name="crosses"
          />
          <img src="@/assets/bund.png" class="" />
        </div>
      </div>
      <div class="p-24 relative">
        <div class="relative max-w-6xl mt-10">
          <svg-icon
            class="-translate-y-1/2 absolute h-24 right-0 top-0 transform translate-x-1/2 w-auto"
            name="cantons"
          />
          <img src="@/assets/bund.png" class="" />
        </div>
      </div>
    </code-loader>
  </div>
</template>
<style>
.icons .svg-icon {
  height: 24px;
  width: 24px;
}
</style>
<script>
import InfoBox from "../../components/InfoBox.vue";
export default { components: { InfoBox } };
</script>

<template>
  <div>
    <h1 class="font-bold mb-16">Information for Designers</h1>
    <info-box class="my-8 mb-16">
      <p>
        Some elements might not be fully available in this prototype. The
        Elements below serve as an example of how the documentation would look
        like.
      </p>
    </info-box>
    <h2 class="mb-12">
      The Digital Design System of the Swiss Confederation provides guidelines,
      up-to-date design assets and starterkits to Designers to quickly start a
      projet.
    </h2>
    <h3 class="h2 font-bold mb-4">Design tools</h3>
    <p class="mb-3">
      The design system is based on assets created with Figma, a well known UI
      design tool in the designer community. For every component description in
      this documentation, you will find a direct link to the related Figma
      asset. If you're a Sketch user, you can download a Sketch library
      containing all the assets.
    </p>
    <btn variant="link">Open Figma Library</btn>
    <btn variant="link" class="mb-12">Download Sketch Library</btn>

    <h3 class="h2 font-bold mb-4">Fonts usage</h3>
    <p class="mb-3">
      The official font library is named “Swiss Sign”. To get started quickly,
      you can download the trial font family. For official projects, make a
      request for the official Swiss Sign package. Fullfill the form, and you
      will recieve the font files, a CDN link and an official license related to
      the domain name of your project on your email address.
    </p>
    <btn variant="link">Download Swiss Sign Trial version</btn>
    <btn variant="link" class="mb-12">Request official Swiss Sign package</btn>
  </div>
</template>
<script>
import InfoBox from "../../components/InfoBox.vue";
export default {
  components: { InfoBox }
};
</script>

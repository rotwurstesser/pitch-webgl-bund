<template>
  <div>
    <h1>Information for Designers</h1>
    <info-box class="my-8 mb-16">
      <p>
        Some elements might not be fully available or configured in this
        prototype. The Elements below serve as an example of how the
        documentation would look like.
      </p>
    </info-box>
    <h2>
      The Digital Design System of the Swiss Confederation provides guidelines,
      up-to-date design assets and starterkits to Designers to quickly start a
      projet.
    </h2>
    <h3>Design tools</h3>
    <p class="mb-3">
      The design system is based on assets created with Figma, a well known UI
      design tool in the designer community. For every component description in
      this documentation, you will find a direct link to the related Figma
      asset. If you're a Sketch user, you can download a Sketch library
      containing all the assets.
    </p>
    <a
      href="https://www.figma.com/file/tohWKnhnuXCVoG1o1br2MK/Bund-Design-System?node-id=116%3A3972"
      target="_blank"
      rel="noopener noreferrer"
      class="no-underline"
    >
      <btn variant="link">Open Figma Library</btn>
    </a>
    <btn variant="link">Download Sketch Library</btn>

    <h3 class="mt-6">Fonts usage</h3>
    <p class="mb-3">
      The official font library is named “Swiss Sign”. To get started quickly,
      you can download the trial font family. For official projects, make a
      request for the official Swiss Sign package. Fullfill the form, and you
      will recieve the font files, a CDN link and an official license related to
      the domain name of your project on your email address.
    </p>
    <btn variant="link">Download Swiss Sign Trial version</btn>
    <btn variant="link">Request official Swiss Sign package</btn>
  </div>
</template>
<script>
import InfoBox from "../components/InfoBox.vue";
export default {
  components: { InfoBox }
};
</script>

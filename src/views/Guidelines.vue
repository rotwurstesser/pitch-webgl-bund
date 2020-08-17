<template>
  <div>
    <h1>Guidelines</h1>
    <info-box class="my-8">
      <p>
        Some elements might not be fully available or configured in this
        prototype. The Elements below serve as an example of how the
        documentation would look like.
      </p>
    </info-box>

    <h2>Key Principles</h2>
    <p class="mb-4">
      The Design System aims to align with the Guidelines of the Swiss
      Confederation and therefore our principles are:
    </p>
    <ul class="flex flex-wrap">
      <li class="w-1/2 md:w-1/3 flex flex-col items-center p-6 md:px-12">
        <svg-icon
          name="principle-diverse"
          class="h-32 w-32 md:h-48 md:w-48 text-red-700 stroke-light stroke-current"
        />
        <div class="h4">diverse</div>
      </li>
      <li class="w-1/2 md:w-1/3 flex flex-col items-center p-6 md:px-12">
        <svg-icon
          name="principle-flexible"
          class="h-32 w-32 md:h-48 md:w-48 text-red-700 stroke-light stroke-current"
        />
        <div class="h4">flexible</div>
      </li>
      <li class="w-1/2 md:w-1/3 flex flex-col items-center p-6 md:px-12">
        <svg-icon
          name="principle-conversational"
          class="h-32 w-32 md:h-48 md:w-48 text-red-700 stroke-light stroke-current"
        />
        <div class="h4">conversational</div>
      </li>
      <li class="w-1/2 md:w-1/3 flex flex-col items-center p-6 md:px-12">
        <svg-icon
          name="principle-connected"
          class="h-32 w-32 md:h-48 md:w-48 text-red-700 stroke-light stroke-current"
        />
        <div class="h4">connected</div>
      </li>
      <li class="w-1/2 md:w-1/3 flex flex-col items-center p-6 md:px-12">
        <svg-icon
          name="principle-practical"
          class="h-32 w-32 md:h-48 md:w-48 text-red-700 stroke-light stroke-current"
        />
        <div class="h4">practical</div>
      </li>
    </ul>
    <p>
      The key principles are a way to keep your design consistent, in accordance with the corparate identiy of the Swiss Confederation.
    </p>
    <btn variant="link" class="mb-16">Learn more about key principles</btn>

    <h2>Typography</h2>
    <p>The Design System uses Suisse Sign. What sets Suisse Sign apart is its large
    apertures – most evident in a, e, g, s – and the reworked uppercase glyphs.
    The design deviates from the classic Grotesk model, and instead tunes into
    the new sans serif as it emerged in the last third of the 20th century, with
    open shapes and a more economical set width. Suisse Sign covers a wide range
    of applications from small text sizes to big headlines. As the name implies,
    it’s particularly well suited for signage and wayfinding: Characters with
    open counters are less ambiguous and easier to identify from a distance. A
    letter like c can’t be mistaken for an o, even under poor lighting or other
    limiting viewing conditions. The barred I is another means that helps in
    situations were impeccable legibility is required. Suisse Sign comes in
    Thin, Regular, Semi Bold, and Bold, with italics for all weights.
    </p>
    <btn variant="link" class="mb-16">Discover the font and its usage</btn>

    <h2>Logotype</h2>
    <p>
      The logotype consists of two parts, the wordmark "schweizerische
      eidgenossenschaft confederation suisse confederazione svizzera
      confederaziun svizra" and the white cross on a red background. The
      Wordmark needs to contain every Language as to reflect Switzerlands
      Diversity.
    </p>
    <svg-icon name="logo" class="h-24 my-4 w-auto fill-current" />
    <btn variant="link">Learn more about the logotype and its usage</btn>

  </div>
</template>
<script>
import InfoBox from "../components/InfoBox.vue";
export default { components: { InfoBox } };
</script>

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
    <h2>Suisse Sign</h2>
    <p class="mb-12">The Design System uses Suisse Sign. What sets Suisse Sign apart is its large
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

    <h2>Logotype</h2>
    <p>
      The logotype consists of two parts, the wordmark "schweizerische
      eidgenossenschaft confederation suisse confederazione svizzera
      confederaziun svizra" and the white cross on a red background. The
      Wordmark needs to contain every Language as to reflect Switzerlands
      Diversity.
    </p>
    <svg-icon name="logo" class="h-24 my-4 mb-12 w-auto fill-current" />

    <h2>Key Principles</h2>
    <p class="mb-4">
      The Design System aims to align with the Guidelines of the Swiss
      Confederation and therefore our principles are:
    </p>
    <ul>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" /> diverse
      </li>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" /> flexible
      </li>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" /> conversational
      </li>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" /> connected
      </li>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" /> practical
      </li>
    </ul>
  </div>
</template>
<script>
import InfoBox from "../components/InfoBox.vue";
export default { components: { InfoBox } };
</script>

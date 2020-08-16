<template>
  <div class="space-y-6 max-w-4xl icons">
    <h1 class="font-bold ">Icons</h1>
    <info-box class="my-8 mb-16">
      <p>
        The Icons we picked on this page are a set of Opensource icons which
        could make sense on Admin pages, any adaptions and choices are
        experimental.
      </p>
    </info-box>
    <p>
      Icons should always be in red or black when placed on a white or blue
      background. The same applies when icons are placed on other light
      background colours. When icons are in a group, use them in the same size
      to ensure that they have the same line weight
    </p>
    <ul>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" /> Do not use filled icons.
      </li>
      <li class="flex space-x-4">
        <svg-icon class="h-6 w-12" name="arrow" /> Do not alter or distort the
        icons.
      </li>
      <li class="flex">
        <svg-icon class="h-6 w-12" name="arrow" />
        <p>
          If you feel there is an icon missing feel free to
          <router-link to="/contribute">
            contribute
          </router-link>
          it.
        </p>
      </li>
    </ul>

    <h2>Accessibility</h2>
    <p>
      Icons can convey all sorts of meaningful information, so it’s important
      that they reach the largest amount of people possible. We’ve done the
      research and simplified things down to two use cases you’ll want to
      consider: Decorative Icons are only being used for visual or branding
      reinforcement. If they were removed from the page, users would still
      understand and be able to use your page. Semantic Icons are ones that
      you’re using to convey meaning, rather than just pure decoration. This
      includes icons without text next to them used as interactive controls —
      buttons, form elements, toggles, etc. Please use the proper title tags and
      attributes when using these.
    </p>
    <h2>Action Icons</h2>
    <p>Action icons are used to signal and describe interaction.</p>
    <code-loader lang="html">
      <div class="flex flex-wrap space-x-4">
        <svg-icon class="text-red-600 fill-current" name="cogaction" />
        <svg-icon
          class="text-red-600 fill-current"
          name="dots-horizontalaction"
        />
        <svg-icon
          class="text-red-600 fill-current"
          name="dots-verticalaction"
        />
        <svg-icon class="text-red-600 fill-current" name="duplicateaction" />
        <svg-icon class="text-red-600 fill-current" name="eye-offaction" />
        <svg-icon class="text-red-600 fill-current" name="eyeaction" />
        <svg-icon class="text-red-600 fill-current" name="filteraction" />
        <svg-icon
          class="text-red-600 fill-current"
          name="paper-airplaneaction"
        />
        <svg-icon class="text-red-600 fill-current" name="trashaction" />
        <svg-icon class="text-red-600 fill-current" name="trashaction" />
      </div>
    </code-loader>
    <h2>Identification Icons</h2>
    <p>
      Identification icons are used to identify a service, information or
      product.
    </p>
    <code-loader lang="html">
      <div class="flex flex-wrap space-x-4">
        <svg-icon
          class="text-red-600 fill-current"
          name="academic-capidentification"
        />
        <svg-icon class="text-black fill-current" name="arrowdefault" />
        <svg-icon
          class="text-red-600 fill-current"
          name="briefcaseidentification"
        />
        <svg-icon
          class="text-red-600 fill-current"
          name="currency-euroidentification"
        />
        <svg-icon
          class="text-red-600 fill-current"
          name="identificationidentification"
        />
        <svg-icon
          class="text-red-600 fill-current"
          name="libraryidentification"
        />
        <svg-icon
          class="text-red-600 fill-current"
          name="office-buildingidentification"
        />
        <svg-icon
          class="text-red-600 fill-current"
          name="shopping-cartidentification"
        />
        <svg-icon
          class="text-red-600 fill-current"
          name="truckidentification"
        />
        <svg-icon
          class="text-red-600 fill-current"
          name="vectoridentification"
        />
      </div>
    </code-loader>
    <h2>Navigation Icons</h2>
    <p>Navigation icons are used as part of the UI.</p>
    <code-loader lang="html">
      <div class="flex flex-wrap space-x-4">
        <svg-icon class="text-red-600 fill-current" name="zoom-outnav" />
        <svg-icon class="text-red-600 fill-current" name="zoom-innav" />
        <svg-icon class="text-red-600 fill-current" name="calendarnav" />
        <svg-icon class="text-red-600 fill-current" name="chevron-downnav" />
        <svg-icon class="text-red-600 fill-current" name="chevron-leftnav" />
        <svg-icon class="text-red-600 fill-current" name="chevron-rightnav" />
        <svg-icon class="text-red-600 fill-current" name="chevron-upnav" />
        <svg-icon class="text-red-600 fill-current" name="external-linknav" />
        <svg-icon class="text-red-600 fill-current" name="homenav" />
        <svg-icon class="text-red-600 fill-current" name="menunav" />
        <svg-icon class="text-red-600 fill-current" name="xnav" />
        <svg-icon class="text-red-600 fill-current" name="minusnav" />
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
export default {
  components: { InfoBox }
};
</script>

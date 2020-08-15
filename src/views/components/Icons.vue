<template>
  <div class="space-y-6 max-w-4xl icons">
    <h1 class="font-bold mb-16">Icons</h1>
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
    </ul>

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
        <svg-icon class="text-red-600 fill-current" name="academic-" />
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

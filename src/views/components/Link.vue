<template>
  <div class="space-y-6 linkzz">
    <h2>Links</h2>
    <info-box class="my-8">
      <p>
        Some elements might not be fully available in this prototype. The
        Elements below serve as an example of how the documentation would look
        like.
      </p>
    </info-box>
    <p></p>
    <div>
      <ul class="ml-5 space-y-4 mb-6">
        <li class="flex space-x-4">
          <svg-icon class="h-6 w-12" name="arrow" /> When providing the content
          for the link, avoid generic descriptions like "click here" or "go to".
          Instead, use specific descriptions
        </li>
        <li class="flex space-x-4">
          <svg-icon class="h-6 w-12" name="arrow" /> On larger sites use the
          arrow icon to guide the users eye. If you do, do not forget to hide
          the icon for screenreaders.
        </li>
        <li class="flex space-x-4">
          <svg-icon class="h-6 w-12" name="arrow" /> For the best user
          experience, links should stand out from the text on the page.
        </li>
        <li class="flex space-x-4">
          <svg-icon class="h-6 w-12" name="arrow" /> If a link doesn't have a
          meaningful href, it should be rendered using a button element.
        </li>
      </ul>
      <h2 class="mb-4">Example</h2>
      <code-loader lang="html">
        <div class="my-4">
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
            nostrum odit aut. Odio, maiores dolores dolor facilis laudantium
            explicabo culpa cumque corrupti, illum esse saepe illo reiciendis
            enim dicta totam recusandae eligendi laboriosam, harum cum? Harum
            distinctio ea nesciunt maxime porro, voluptate nam eveniet dolorum
            illo, fugiat quibusdam impedit vero ad esse aspernatur incidunt
            consequatur facere magni magnam ipsam saepe. Doloribus possimus
            inventore pariatur molestias iusto sed ipsum ipsam incidunt! Dicta,
            earum saepe!
          </p>
          <a
            alt="Seite des Bag, Infos für Fachpersonen"
            class="flex space-x-4 mb-4 btn"
            href="https://www.bag.admin.ch/bag/de/home/krankheiten/ausbrueche-epidemien-pandemien/aktuelle-ausbrueche-epidemien/novel-cov/information-fuer-die-aerzteschaft.html"
          >
            <svg-icon
              aria-hidden="true"
              class="h-6 w-12"
              name="arrow"
            />Informationen für Gesundheitsfachpersonen
          </a>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            mollitia officiis ipsa, dolor magnam et reprehenderit iure nam!
            Optio, illum.
          </p>
        </div>
      </code-loader>
    </div>
  </div>
</template>
<style lang="postcss">
.linkzz a {
  @apply font-bold;
}
</style>
<script>
import InfoBox from "../../components/InfoBox.vue";
export default { components: { InfoBox } };
</script>

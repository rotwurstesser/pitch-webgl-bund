<template>
  <div class="space-y-6">
    <h1 class="font-bold mb-16">Info box component</h1>

    <code-loader lang="html">
      <info-box>
        <p class="font-bold mb-4">Einreise in die Schweiz</p>
        <p>Quarantänepflicht <br/> Infoline für einreisende Personen: +41 58 464 44 88 (täglich 6 bis 23 Uhr)</p>
        <p class="font-bold mb-8 flex items-center">
          <svg-icon class="w-8 h-8" name="arrow" /> Staaten und Gebiete mit erhohtem Infektionsrisiko</p>
        <p class="font-bold mb-4">Eigenverantwortung bleibt wichtig</p>
        <p class="mb-8">Vor einer Ansteckung schützen Sie sich, 
          indem Sie die Hände regelmässig mit Seife waschen und Abstand halten. 
          Befolgen Sie weiterhin die Hygiene- und Verhaltensregeln. 
          Das neue Coronavirus soll sich nicht wieder stärker verbreiten.
        </p>
        <p class="font-bold">Infoline Coronavirus: +41 58 463 00 00 <br/> täglich 6 bis 23 Uhr</p>
      </info-box>
    </code-loader>
  </div>
</template>

<script>
import InfoBox from "@/components/InfoBox.vue";

export default {
  components: { InfoBox }
};
</script>

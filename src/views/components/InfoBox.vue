<template>
  <div class="space-y-6 mb-24">
    <h1 class="font-bold mb-16">Info box component</h1>
    <p>
      Info Boxes are mostly used for presenting shorter, article like, content
      segments. Like posts. They can also be used to highlight content inside of
      larger pages and guiding the users attention. Note that not more than one
      Info Box should be used per page.
    </p>
    <code-loader
      figmalink="https://www.figma.com/file/tohWKnhnuXCVoG1o1br2MK/Bund-Design-System?node-id=191%3A4281"
      lang="html"
    >
      <info-box>
        <p class="font-bold mb-4">Einreise in die Schweiz</p>
        <p>
          Quarantänepflicht <br />
          Infoline für einreisende Personen: +41 58 464 44 88 (täglich 6 bis 23
          Uhr)
        </p>
        <p class="font-bold mb-8 flex items-center">
          <svg-icon class="w-8 h-8" name="arrow" /> Staaten und Gebiete mit
          erhohtem Infektionsrisiko
        </p>
        <p class="font-bold mb-4">Eigenverantwortung bleibt wichtig</p>
        <p class="mb-8">
          Vor einer Ansteckung schützen Sie sich, indem Sie die Hände
          regelmässig mit Seife waschen und Abstand halten. Befolgen Sie
          weiterhin die Hygiene- und Verhaltensregeln. Das neue Coronavirus soll
          sich nicht wieder stärker verbreiten.
        </p>
        <p class="font-bold">
          Infoline Coronavirus: +41 58 463 00 00 <br />
          täglich 6 bis 23 Uhr
        </p>
      </info-box>
    </code-loader>
    <h2 class="mx-5">Infoboxes as warning</h2>
    <p>
      Info boxes can also be used to guide a users attention to errors or
      warnings surfacing from the system.
    </p>
    <code-loader
      figmalink="https://www.figma.com/file/tohWKnhnuXCVoG1o1br2MK/Bund-Design-System?node-id=398%3A0"
      lang="html"
    >
      <info-box class="info-box--warning">
        <p class="font-bold mb-4">Fehler im System</p>
        <p class="mb-8">
          User: <br />
          <span class="font-bold">
            Maximilian Mustermensch | Maximilian.mustermensch@eda.ch</span
          >
          <br />
          konnte sich nicht einloggen
        </p>
        <p class="mb-8">
          Als Administrator können sie diesen User freigeben
        </p>
      </info-box>
    </code-loader>
    <h2 class="mx-5">Infoboxes as success</h2>
    <p>
      Info boxes can also be used to guide a users attention to success messages
      surfacing from the system.
    </p>
    <code-loader
      figmalink="https://www.figma.com/file/tohWKnhnuXCVoG1o1br2MK/Bund-Design-System?node-id=400%3A0"
      lang="html"
    >
      <info-box class="info-box--success">
        <p class="font-bold mb-4">
          Maximilian.mustermensch@eda.ch erfolgreich freigegeben!
        </p>
        <p class="mb-8">
          User: <br />
          <span class="font-bold">
            Maximilian Mustermensch | Maximilian.mustermensch@eda.ch</span
          >
          <br />
          konnte sich nun einloggen
        </p>
        <p class="mb-8">
          Wir haben den Benutzer benachrichtigt
        </p>
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

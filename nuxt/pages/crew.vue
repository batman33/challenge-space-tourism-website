<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'crew'
  }
})
</script>
<template>
  <main id="main" class="grid-container grid-container--crew flow">
    <h1 class="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>

    <div class="dot-indicators flex" role="tablist" aria-label="crew member list">
      <button aria-selected="true" aria-controls="commander-tab" role="tab" data-image="commander-image" tabindex="0"><span class="sr-only">The commander</span></button>
      <button aria-selected="false" aria-controls="mission-tab" role="tab" data-image="mission-image" tabindex="-1"><span class="sr-only">The mission specialist</span></button>
      <button aria-selected="false" aria-controls="pilot-tab" role="tab" data-image="pilot-image" tabindex="-1"><span class="sr-only">The pilot</span></button>
      <button aria-selected="false" aria-controls="crew-tab" role="tab" data-image="crew-image" tabindex="-1"><span class="sr-only">The crew engineer</span></button>
    </div>
    <article class="crew-details flow" id="commander-tab" role="tabpanel" tabindex="0">
      <header class="flow flow--space-small">
        <h2 class="fs-600 ff-serif uppercase">Commander</h2>
        <p class="fs-700 uppercase ff-serif">Douglas Hurley</p>
      </header>
      <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
         and former NASA astronaut. He launched into space for the third time as
         commander of Crew Dragon Demo-2.</p>
    </article>
    <picture id="commander-image">
      <source srcset="~/assets/crew/image-douglas-hurley.webp" type="image/webp">
      <img src="~/assets/crew/image-douglas-hurley.png" alt="Douglas Hurley">
    </picture>
  </main>
</template>

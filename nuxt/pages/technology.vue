<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'technology'
  },
})
</script>
<template>
  <main id="main" class="grid-container grid-container--technology flow">
    <h1 class="numbered-title"><span aria-hidden="true">03</span> Space launch 101</h1>

    <div class="dot-indicators-2 flex" role="tablist" aria-label="technology list">
      <button class="ff-serif fs-600"
              aria-selected="true"
              role="tab"
              aria-controls="capsule-tab"
              tabindex="0"
              data-image="capsule-image">1
      </button>
      <button class="ff-serif fs-600"
              aria-selected="false"
              role="tab"
              aria-controls="spaceport-tab"
              tabindex="-1"
              data-image="spaceport-image">2
      </button>
      <button class="ff-serif fs-600"
              aria-selected="false"
              role="tab"
              aria-controls="space-capsule-tab"
              tabindex="-1"
              data-image="space-capsule-image">3
      </button>
    </div>

    <article class="technology-details flow" id="capsule-tab" role="tabpanel" tabindex="0">
      <header>
        <h2 class="text-accent fs-300 ff-serif uppercase">The terminology...</h2>
        <p class="fs-700 uppercase ff-serif">Launch vehicle</p>
      </header>
      <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
         payload from Earth's surface to space, usually to Earth orbit or beyond. Our
         WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
         it's quite an awe-inspiring sight on the launch pad!</p>
    </article>

    <picture id="capsule-image">
      <img class="landscape" src="~/assets/technology/image-launch-vehicle-landscape.jpg" alt="Launch Vehicle">
      <img class="portrait" src="~/assets/technology/image-launch-vehicle-portrait.jpg" alt="Launch Vehicle">
    </picture>
  </main>
</template>

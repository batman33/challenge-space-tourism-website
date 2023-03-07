<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import { useCrewStore } from "@/stores/data";
import { getImg } from '@/helpers/functions'

const store = useCrewStore();

onMounted(() => {
  document.body.classList.add('crew')
})

onUnmounted(() => {
  document.body.classList.remove('crew')
})
</script>
<template>
  <main id="main" class="grid-container grid-container--crew flow">
    <h1 class="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>

    <div class="dot-indicators flex" role="tablist" aria-label="crew member list">
      <button
          v-for="(crew, index) in store.crews"
          @click="store.change(index)"
          :aria-selected="index === store.activeTab ? 'true' : 'false'"
          role="tab">
        <span class="sr-only">The crew {{ crew.role }}</span>
      </button>
    </div>

    <article class="crew-details flow" id="commander-tab" role="tabpanel" tabindex="0">
      <header class="flow flow--space-small">
        <h2 class="fs-600 ff-serif uppercase">{{ store.crew.role }}</h2>
        <p class="fs-700 uppercase ff-serif">{{ store.crew.name }}</p>
      </header>
      <p>{{ store.crew.bio }}</p>
    </article>

    <picture>
      <source :srcset="getImg(`./../${store.crew.images.webp}`)" type="image/webp" />
      <img
          :src="getImg(`./../${store.crew.images.png}`)"
          :alt="`the ${store.crew.name}`"
      />
    </picture>
  </main>
</template>

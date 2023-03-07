<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import { useDestinationStore } from '@/stores/data'
import { getImg } from '@/helpers/functions'

const store = useDestinationStore()

onMounted(() => {
  document.body.classList.add('destination')
})

onUnmounted(() => {
  document.body.classList.remove('destination')
})
</script>
<template>
  <main id="main" class="grid-container grid-container--destination flow">
    <h1 class="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>

    <picture>
      <source :srcset="getImg(`./../${store.destination.images.webp}`)" type="image/webp" />
      <img
        :src="getImg(`./../${store.destination.images.png}`)"
        :alt="`the ${store.destination.name}`"
      />
    </picture>

    <div class="tab-list underline-indicators flex" role="tablist" aria-label="destination list">
      <button
        :aria-selected="store.activeTab === index ? 'true' : 'false'"
        role="tab"
        class="uppercase ff-sans-cond text-accent letter-spacing-2"
        @click="store.change(index)"
        v-for="(item, index) in store.destinations"
        :key="item.name"
      >
        {{ item.name }}
      </button>
    </div>

    <article class="destination-info flow" role="tabpanel">
      <h2 class="fs-800 uppercase ff-serif">Moon</h2>

      <p>{{ store.destination.description }}</p>

      <div class="destination-meta flex">
        <div>
          <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
          <p class="ff-serif uppercase">{{ store.destination.distance }}</p>
        </div>
        <div>
          <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
          <p class="ff-serif uppercase">{{ store.destination.travel }}</p>
        </div>
      </div>
    </article>
  </main>
</template>

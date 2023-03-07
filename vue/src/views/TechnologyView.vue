<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import { useTechnologyStore } from "@/stores/data";
import { getImg } from '@/helpers/functions'

const store = useTechnologyStore();

onMounted(() => {
  document.body.classList.add('technology')
})

onUnmounted(() => {
  document.body.classList.remove('technology')
})
</script>
<template>
  <main id="main" class="grid-container grid-container--technology flow">
    <h1 class="numbered-title"><span aria-hidden="true">03</span> Space launch 101</h1>

    <div class="dot-indicators-2 flex" role="tablist" aria-label="technology list">
      <button class="ff-serif fs-600"
              :aria-selected="index === store.activeTab ? 'true' : 'false'"
              v-for="(_, index) in store.technologies"
              @click="store.change(index)"
              role="tab">{{ index + 1 }}
      </button>
    </div>

    <article class="technology-details flow">
      <header>
        <h2 class="text-accent fs-300 ff-serif uppercase">The terminology...</h2>
        <p class="fs-700 uppercase ff-serif">{{store.technology.name}}</p>
      </header>
      <p>{{store.technology.description}}</p>
    </article>

    <picture id="capsule-image">
      <img class="landscape" :src="getImg(`./../${store.technology.images.landscape}`)" :alt="store.technology.name">
      <img class="portrait" :src="getImg(`./../${store.technology.images.portrait}`)" :alt="store.technology.name">
    </picture>
  </main>
</template>

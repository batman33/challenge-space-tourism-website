<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="primary-header flex">
    <div>
      <img src="@/assets/shared/logo.svg" alt="space logo" class="logo" />
    </div>
    <button class="mobile-nav-toggle" aria-controls="primary-navigation">
      <span class="sr-only" aria-expanded="false">Menu</span>
    </button>
    <nav>
      <ul
        id="primary-navigation"
        data-visible="false"
        class="primary-navigation underline-indicators flex"
      >
        <router-link
          :to="{ name: 'home' }"
          custom
          v-slot="{ href, navigate, isActive, isExactActive }"
        >
          <li :class="{ active: isActive }">
            <a
              class="ff-sans-cond uppercase text-white letter-spacing-2"
              :href="href"
              @click="navigate"
            >
              <span aria-hidden="true">00</span> Home
            </a>
          </li>
        </router-link>
        <router-link
          :to="{ name: 'destination' }"
          custom
          v-slot="{ href, navigate, isActive, isExactActive }"
        >
          <li :class="{ active: isActive }">
            <a
              class="ff-sans-cond uppercase text-white letter-spacing-2"
              :href="href"
              @click="navigate"
            >
              <span aria-hidden="true">01</span> Destination
            </a>
          </li>
        </router-link>
        <router-link
          :to="{ name: 'crew' }"
          custom
          v-slot="{ href, navigate, isActive, isExactActive }"
        >
          <li :class="{ active: isActive }">
            <a
              class="ff-sans-cond uppercase text-white letter-spacing-2"
              :href="href"
              @click="navigate"
            >
              <span aria-hidden="true">02</span> Crew
            </a>
          </li>
        </router-link>
        <router-link
          :to="{ name: 'technology' }"
          custom
          v-slot="{ href, navigate, isActive, isExactActive }"
        >
          <li :class="{ active: isActive }">
            <a
              class="ff-sans-cond uppercase text-white letter-spacing-2"
              :href="href"
              @click="navigate"
            >
              <span aria-hidden="true">03</span> Technology
            </a>
          </li>
        </router-link>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

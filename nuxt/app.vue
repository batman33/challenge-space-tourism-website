<script setup>
import { useRuntimeConfig } from "nuxt/app";

const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

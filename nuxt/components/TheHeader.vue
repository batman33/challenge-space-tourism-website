<script setup lang="ts">
const menu = [
  {title: 'Home', path: '/', name: 'index'},
  {title: 'Destination', path: '/destination', name: 'destination'},
  {title: 'Crew', path: '/crew', name: 'crew'},
  {title: 'Technology', path: '/technology', name: 'technology'},
]
const route = useRoute();

const activeRoute = useState<string>('active-route', () => route.name as string);

watch(route, (r) => {
  activeRoute.value = r.name as string;
});

const activeMenu = (routeMenu: string) => {
  console.log(activeRoute.value);
  return activeRoute.value === routeMenu;
};

</script>
<template>
  <header class="primary-header flex">
    <div>
      <img src="~/assets/shared/logo.svg" alt="space logo" class="logo">
    </div>
    <button class="mobile-nav-toggle" aria-controls="primary-navigation"><span class="sr-only" aria-expanded="false">Menu</span></button>
    <nav>
      <ul id="primary-navigation" data-visible="false" class="primary-navigation underline-indicators flex">
        <li :class="{ active: activeMenu(item.name) }" v-for="(item, index) in menu" :key="item.name">
          <NuxtLink class="ff-sans-cond uppercase text-white letter-spacing-2" :to="item.path"><span aria-hidden="true">0{{ index }}</span> {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

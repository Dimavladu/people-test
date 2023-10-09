<template>
  <header>
    <div class="container">
      <ul class="header">
        <li v-for="(item, idx) in navLinks" :key="idx">
          <router-link class="header__link" active-class="header__link--active" :to="{path: item.url, query: $route.query}">
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref} from "vue"

const navLinks = ref([
  {
    name: 'Главная',
    url: '/'
  },
  {
    name: 'Пользователи',
    url: '/peoples'
  },
  {
    name: 'Избранное',
    url: '/favorites'
  }
])
</script>

<style lang="sass" scoped>
.header
  @apply bg-accent-blue rounded-xl mt-2 text-paper px-10 py-3 flex justify-between drop-shadow-lg overflow-x-scroll
  @apply md:justify-start md:gap-x-5 md:overflow-x-auto
  @apply lg:mt-6 lg:py-4
  &__link
    @apply hover:opacity-70 transition-all text-sm
    @apply lg:text-base
    &--active
      @apply opacity-70 hover:opacity-70 cursor-auto
</style>
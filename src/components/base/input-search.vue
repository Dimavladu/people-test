<template>
  <div class="input-search-wrapper" v-click-outside="hideSuggestions">
    <label class="input-search"  for="search-input" @click="showSuggestions()">
      <input id="search-input" type="search" placeholder="Поиск" v-model="text" />
      <search-svg />
    </label>
    <transition>
      <div class="input-search-suggestions" v-if="isActiveSuggestions">
          <div class="input-search-suggestions__list">
            <div class="" v-if="countSearchResult && text">
              <router-link
                  v-for="people in resultPeoples"
                  :key="people.name"
                  :to="{name: 'peoplesDetail', params:{id:useGetRealIdx(people.url)}, query: $route.query}"
                  class="input-search-suggestions__item"
              >
                {{people.name}}
              </router-link>
            </div>
            <base-loader v-else-if="countSearchResult === null && text" />
            <div class="input-search-suggestions__item input-search-suggestions__item--disabled" v-else-if="countSearchResult === 0">Ничего не найдено</div>
            <div class="input-search-suggestions__item input-search-suggestions__item--disabled" v-else-if="!text">Пожалуйста, введите текст для поиска</div>
          </div>

      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import BaseLoader from "@/components/Loader.vue"
import SearchSvg from "@/components/icons/searchSvg.vue"
import {computed, ref, watch} from "vue"
import {useStore} from "@/store/useStore"
import {useGetRealIdx} from "@/composables/useGetRealIdx"

const store = useStore()
const text = defineModel()
const isActiveSuggestions = ref(false)

watch(text, async () =>{
  await store.getSearchPeoples(String(text.value))
})

const resultPeoples = computed(() => store.searchResults)
const countSearchResult = computed(() => store.countSearchResult)

function hideSuggestions(){
  isActiveSuggestions.value = false
}
function showSuggestions(){
  isActiveSuggestions.value = true
}

</script>

<style lang="sass" scoped>
.input-search
  @apply px-4 py-2 border rounded-xl transition-all duration-300 flex justify-between items-center gap-x-3
  input
    @apply flex-1
  &-wrapper
    @apply w-full relative
    @apply lg:w-1/3
  &-suggestions
    @apply absolute bg-white drop-shadow-lg bottom-0 translate-y-full w-full rounded-xl
    &__list
      @apply rounded-lg
    &__item
      @apply px-3 py-2 flex transition-all duration-300 hover:opacity-70
      &--disabled
        @apply hover:opacity-100

</style>
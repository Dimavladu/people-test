<template>
  <div class="table" v-if="peoplesList?.length">
    <ul class="table__row">
      <li class="table__item table__item--name"
          v-for="name in labelNames"
          :key="name"
      >
        {{name}}
      </li>
    </ul>
    <ul
        v-for="people in peoplesList"
        :key="people.name"
        class="table__row"
    >
      <li class="table__item">
        <router-link :to="{name: 'peoplesDetail', params:{id: useGetRealIdx(people.url), }, query: $route.query}" >
          {{people.name}}
        </router-link>
      </li>
      <li class="table__item">{{people.height}}</li>
      <li class="table__item">{{people.mass}}</li>
      <li class="table__item">{{people.hair_color}}</li>
      <li class="table__item table__item--favorite">
        <favorite-svg :people="people" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {IFormattedPeople, IPeople} from "@/types"
import {ref} from "vue"
import FavoriteSvg from "@/components/icons/favoriteSvg.vue"
import {useGetRealIdx} from "@/composables/useGetRealIdx";

interface IProps{
  peoplesList: IFormattedPeople[] | IPeople[]
}

const {peoplesList} = defineProps<IProps>()

const labelNames = ref(['Имя', 'Рост', 'Вес', 'Цвет волос', 'Избранное'])

</script>

<style lang="sass" scoped>
.table
  $self: &
  @apply border rounded-sm overflow-hidden w-full
  &__row
    @apply col-span-1 grid grid-cols-5 odd:bg-gray-100
    a
      @apply hover:opacity-70 transition-all duration-300
  &__item
    @apply col-span-1 border p-1 text-sm break-words
    @apply lg:text-base lg:p-2
    &--name
      @apply font-bold hover:opacity-100
    &--favorite
      @apply flex justify-center items-center gap-x-5

</style>
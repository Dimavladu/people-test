<template>
  <section>
    <div class="container">
      <div class="top-info">
        <h1 class="h1">Пользователь {{currId}}</h1>
        <transition>
          <favorite-svg v-if="isLoading" :people="detailedInfo" />
        </transition>
      </div>
      <transition mode="out-in">
        <div class="table" v-if="isLoading">
          <ul class="table__row" v-for="field in detailedFields" :key="field.title">
            <li class="table__item">{{field.title}}</li>
            <li class="table__item">{{detailedInfo[field.value]}}</li>
          </ul>
        </div>
        <base-loader v-else />
      </transition>

    </div>
  </section>
</template>

<script setup lang="ts">

import {computed, onMounted, ref} from "vue"
import {useStore} from "@/store/useStore"
import {useRoute} from "vue-router"
import {IPeople} from "@/types"
import FavoriteSvg from "@/components/icons/favoriteSvg.vue";
import BaseLoader from "@/components/Loader.vue";

const store = useStore()
const route = useRoute()

const currId = ref(route.params.id)

const detailedInfo = ref<IPeople | {}>({})

onMounted( async() =>{
  detailedInfo.value = await store.getDetailedPeople(currId.value)
})

const isLoading = computed(() => detailedInfo.value && Object.keys(detailedInfo.value).length)

const detailedFields = ref([
  {
    title: 'Имя',
    value: 'name'
  },
  {
    title: 'Рост',
    value: 'height'
  },
  {
    title: 'Вес',
    value: 'mass'
  },
  {
    title: 'Цвет волос',
    value: 'hair_color'
  },
  {
    title: 'Цвет кожи',
    value: 'skin_color'
  },
  {
    title: 'Год рождения',
    value: 'birth_year'
  },
  {
    title: 'Пол',
    value: 'gender'
  },
])

</script>

<style lang="sass" scoped>
.top-info
  @apply flex gap-x-5 items-center
  @apply lg:gap-x-8
.table
  @apply rounded-sm overflow-hidden flex-col w-full flex mt-10
  &__col
    @apply flex flex-col min-w-[20%]
  &__row
    @apply flex
  &__item
    @apply p-2 border w-1/2
</style>
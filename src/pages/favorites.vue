<template>
  <section>
    <div class="container">
      <h1 class="h1">Избранное <span>({{favoriteListLeng}})</span></h1>
      <div class="peoples">
        <base-table :peoplesList="favoriteList" v-if="favoriteListLeng" />
        <div class="" v-else>В избранном пока нет пользователей</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import {useStore} from "@/store/useStore"
import {computed} from "vue"
import BaseTable from "@/components/Table.vue"

const store = useStore()

const favoriteList = computed(() => store.favoriteList)
const favoriteListLeng = computed(() => favoriteList.value?.length)
</script>

<style lang="sass" scoped>
.peoples
  @apply mt-5
.top-info
  @apply flex items-start justify-between flex-col gap-y-5
  @apply lg:flex-row lg:items-center
</style>
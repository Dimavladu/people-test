<template>
  <section>
    <div class="container">
      <div class="top-info">
        <h1 class="h1">
          Пользователи
          <Transition>
            <span v-if="peoplesCount">
              ({{peoplesCount}})
            </span>
          </Transition>
        </h1>
        <Transition>
          <search-input v-if="peoplesCount" v-model="searchText" />
        </Transition>
      </div>
      <div class="peoples">
        <Transition mode="out-in">
          <base-loader v-if="isLoading" />
          <div class="peoples__list" v-else>
            <base-table :peoplesList="peoplesList" />
            <base-pagination v-model="page" :peoplesCount="peoplesCount" />
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseLoader from "@/components/Loader.vue"
import SearchInput from "@/components/base/input-search.vue"
import BasePagination from "@/components/base/pagination.vue"
import BaseTable from "@/components/Table.vue"
import {useStore} from "@/store/useStore"
import {useRoute, useRouter} from "vue-router"
import {computed, onMounted, ref, watch} from "vue"

const store = useStore()
const router = useRouter()
const route = useRoute()

const isLoading = ref(false)
const searchText = ref<string>('')
const page = ref<number>(Number(route.query?.peoplePage) || 1)

onMounted(async () =>{
  if(peoplesList.value?.length) {
    isLoading.value = false
    return
  }
  await getPeoples()
})

const peoplesList = computed(() => store.formattedPeoples)
const peoplesCount = computed(() => store.count || 0)

async function getPeoples(){
  isLoading.value = true
  await store.getPeoples(page.value)
  isLoading.value = false
}

watch(page, async () =>{
    router.push({query:{peoplePage: page.value}})
    await getPeoples()
})

</script>

<style lang="sass" scoped>
.peoples
  @apply mt-5
.top-info
  @apply flex items-start justify-between flex-col gap-y-5
  @apply lg:flex-row lg:items-center
</style>
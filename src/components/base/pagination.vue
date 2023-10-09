<template>
    <paginate
        v-model="page"
        :page-count="pageCount"
        :margin-pages="2"
        page-class="pagination__item"
        active-class="pagination__item--selected"
        prev-class="hidden"
        next-class="hidden"
    />
</template>

<script setup lang="ts">
import Paginate from "vuejs-paginate-next"
import {computed} from "vue"
interface IProps{
  peoplesCount: number
  modelValue: number
}

const {peoplesCount} = defineProps<IProps>()

const page = defineModel()

const pageCount = computed(() => Math.ceil(peoplesCount / 10))

</script>

<style lang="sass">
.pagination
  @apply w-full flex gap-x-3 mt-10
  &__item
    a
      @apply px-4 py-2.5 border rounded-lg cursor-pointer hover:opacity-70 transition-all duration-300
    &--selected
      a
        @apply border-accent-light-blue hover:opacity-100
</style>
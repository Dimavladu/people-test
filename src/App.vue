<template>
  <div id="app">
    <TheHeader />
    <main>
      <router-view v-slot="{Component}">
        <KeepAlive>
          <transition mode="out-in">
            <component :is="Component" :key="$route.params.id" />
          </transition>
        </KeepAlive>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import TheHeader from "@/components/Header.vue"
</script>

<style lang="sass">


</style>

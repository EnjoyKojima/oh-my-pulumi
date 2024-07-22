<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="p-10">
    <NuxtRouteAnnouncer />
    <h1 class="pb-6">{{ route.path }}</h1>
    <NuxtPage />
  </div>
</template>

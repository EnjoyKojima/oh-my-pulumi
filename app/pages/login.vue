<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>{{ route.path }}</h1>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login">Login</NuxtLink>
      </li>
    </ul>
  </div>
</template>

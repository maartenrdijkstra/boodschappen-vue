<template>
    <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/create">Go to Create</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

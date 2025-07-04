<template>
  <nav>
    <RouterLink class="addPadding" to="/">Go to Home</RouterLink>
    <RouterLink class="addPadding" to="/create">Go to Create</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
  .addPadding {
    padding: 24px;
  }
  
  nav { 
    margin-bottom: 16px;
  }
</style>
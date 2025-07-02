<template>
    <form @input='addGrocery'>
        <p>Voeg Item toe</p>      
        <p>Naam</p><input v-model="product.name">
    </form>

</template>

<script setup>
import 

const props = defineProps({
  products: Array
})

</script>
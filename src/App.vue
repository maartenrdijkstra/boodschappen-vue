<template>
  <GroceriesTable :products="products"></GroceriesTable>    
</template>

<script setup>
  import {ref} from 'vue';
  import GroceriesTable from './components/GroceriesTable.vue';
  

  const products = ref([
    {
        name: 'Rijst',
        productPrice: 1.50,
        productQuantity: 3,
        productTotalCost: 4.50
    },
    {
        name: 'Pasta',
        productPrice: 2.00,
        productQuantity: 2,
        productTotalCost: 4
    },
    {
        name: 'Bonen',
        productPrice: 1.20,
        productQuantity: 5,
        productTotalCost: 6
    }
]);
</script>
<template>

  <GroceriesTable :products="products" />    


</template>

<script setup>
import GroceriesTable from '../../../components/GroceriesTable.vue';
import {getAllGroceries} from '../store';

const products = getAllGroceries;
</script>
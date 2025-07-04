<template>

  <GroceriesTable :groceries="groceries" />



</template>

<script setup>
import GroceriesTable from '../../../components/GroceriesTable.vue';
import GroceryForm from '../components/GroceryForm.vue';
import {getAllGroceries} from '../store';

const groceries = getAllGroceries;
console.log(groceries)



</script>
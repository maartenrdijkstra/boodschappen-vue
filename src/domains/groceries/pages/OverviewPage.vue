<template>
  <GroceriesTable :groceries="groceries" />
</template>

<script setup>
import GroceriesTable from "../../../components/GroceriesTable.vue";
import { getAllGroceries } from "../store";

const groceries = getAllGroceries;
</script>

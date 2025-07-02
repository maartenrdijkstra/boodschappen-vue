<template>
    <form @submit=>
        <p>Voeg Item toe</p>      
        <p>Naam</p><input v-model="naam">
        <p>Prijs</p><input type="number" step=".01" min="0" v-model="prijs">
        <p>Hoeveelheid</p><input type="number"  min="0" v-model="hoeveelheid">
        <button type="submit"></button>
    </form>

</template>

<script setup>
import { addGrocery, getAllGroceries, getGroceryById } from '../store';

const props = defineProps({
  getGroceryById: Object,
  getAllGroceries: Array,
  addGrocery: Number
})

const groceryCopy = getGroceryById(1);
console.log(groceryCopy.value);
const newGrocery = {};

function addGroceryItem() {
  newGrocery.id = Math.max(props.getAllGroceries.values) + 1;
  newGrocery.name = this.naam;
  newGrocery.productPrice = this.prijs;
  newGrocery.productQuantity = this.hoeveelheid;
  console.log(groceryCopy);
  this.$emit('submit', newGrocery)
}

//TODO: maak dit werkend

</script>
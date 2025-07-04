<template>
    <form @submit.prevent="addGroceryItem">
        <p>Add / Update Boodschap</p>      
        <p>Naam</p><input v-model="name">
        <p>Prijs</p><input type="number" step=".01" min="0" v-model="amount">
        <p>Hoeveelheid</p><input type="number"  min="0" v-model="price">
        <br>
        <br>
        <button type="submit">Submit</button>
    </form>
</template>

<script setup>
import {ref} from 'vue';
import { getAllGroceries } from '../store';

const name = ref('')
const price = ref(0)
const amount = ref(0)

const props = defineProps({
  grocery: Object
});

const emit = defineEmits(['submit'])

function addGroceryItem() {
  const newGrocery = props.grocery;
  if(!newGrocery.id) {
    newGrocery.id = Math.max(getAllGroceries.map(groc => groc.id)) + 1;
  }
  newGrocery.name = name.value;
  newGrocery.price = price.value;
  newGrocery.amount = amount.value;
  console.log(newGrocery); 
 emit('submit', newGrocery); 
}
</script>
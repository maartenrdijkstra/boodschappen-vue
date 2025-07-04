<template>
    <form @submit.prevent="saveGroceryItem">
        <p>Naam</p><input v-model="name">
        <p>Prijs</p><input type="number" step=".01" min="0" v-model="price">
        <p>Hoeveelheid</p><input type="number"  min="0" v-model="amount">
        <br>
        <br>
        <button type="submit">Submit</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { getAllGroceries } from '../store';

const emit = defineEmits(['save'])
const props = defineProps({
  grocery: Object
});

const name = ref(props.grocery.name)
const price = ref(props.grocery.price)
const amount = ref(props.grocery.amount)


function saveGroceryItem() {
  const newGrocery = {...props.grocery};
  if (newGrocery.id === undefined) {
    const groceries = getAllGroceries.value;
    const maxId = Math.max(...groceries.map(g => g.id));
    newGrocery.id = maxId + 1; 
  }
  newGrocery.name = name.value;
  newGrocery.price = price.value;
  newGrocery.amount = amount.value;
 emit('save', newGrocery); 
}
</script>
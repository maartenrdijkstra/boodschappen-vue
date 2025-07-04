<template>
    <GroceryForm :grocery="grocery"  @save="updateGroceryItem"></GroceryForm>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { getGroceryById } from '../store'
import GroceryForm from  '../components/GroceryForm.vue'
import { updateGrocery } from '../store'

const route = useRoute()
const id = Number(route.params.id)

const grocery = getGroceryById(id).value;

console.log(grocery);

   function updateGroceryItem(updatedGroceryItem) {
        updateGrocery(updatedGroceryItem)        
    }
</script>
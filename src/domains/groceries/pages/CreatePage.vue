<template>
    <GroceryForm :grocery="grocery" @save="addGroceryItem"></GroceryForm>
</template>

<script setup>
import GroceryForm from '../components/GroceryForm.vue';
import { addGrocery } from '../store';

    const grocery = {name: '', price: 0, amount: 0};

    function addGroceryItem(newGrocery) {
        console.log( newGrocery);
        addGrocery(newGrocery);
    }

</script>
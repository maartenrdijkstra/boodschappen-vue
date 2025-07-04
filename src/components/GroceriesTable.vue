<template>
    <table>
    <thead>
    <tr>
        <th>Product</th>
        <th>Prijs</th>
        <th>Hoeveelheid</th>
        <th>Subtotaal</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="grocery, index in groceries" :key="index">
        <td> {{ grocery.name }}</td>
        <td class="amount">{{ grocery.productPrice.toFixed(2) }} </td>
        <td class="amount"><input type="number" v-model="grocery.productQuantity"></td>
        <td class="amount">{{ (grocery.productPrice * grocery.productQuantity).toFixed(2)  }}</td>
    </tr>
    </tbody>
    <tfoot>
        <tr>
    <td colspan="3"><strong>Totaal</strong></td>
   <td><strong>{{ totalCost.toFixed(2)  }}</strong></td>
    </tr>
    </tfoot>
</table>
</template>


<script setup>
import {computed} from 'vue';

const props = defineProps(['groceries'])

const totalCost = computed(() => {
  return props.groceries.reduce((sum, grocery) => sum + grocery.productPrice * grocery.productQuantity, 0)
})
</script>


<style scoped>
* {
  font-family: sans-serif;
}

table {
  border-collapse: collapse;
}

td,
th {
  padding: 10px;
  border: 1px solid #888;
}

.amount {
  text-align-last: right;
}
</style>

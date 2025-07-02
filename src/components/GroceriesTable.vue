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
    <tr v-for="product, index in products" :key="index">
        <td> {{ product.name }}</td>
        <td class="amount">{{ product.productPrice.toFixed(2) }} </td>
        <td class="amount"><input type="number" v-model="product.productQuantity"></td>
        <td class="amount">{{ (product.productPrice * product.productQuantity).toFixed(2)  }}</td>
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

const props = defineProps(['products'])

const totalCost = computed(() => {
  return props.products.reduce((sum, product) => sum + product.productPrice * product.productQuantity, 0)
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

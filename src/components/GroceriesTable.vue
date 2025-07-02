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
        <td class="amount"><input type="text" v-model="product.productQuantity" @input="updatePrice(index)"></td>
        <td class="amount">{{ product.productTotalCost.toFixed(2)  }}</td>
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

function updatePrice(index) {
  const product = props.products[index]
  product.productTotalCost = product.productPrice * product.productQuantity;
}

const totalCost = computed(() => {
  return props.products.reduce((sum, product) => sum + product.productTotalCost, 0)
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

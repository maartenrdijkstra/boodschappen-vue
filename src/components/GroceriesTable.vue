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
    <tr v-for="grocery in groceries" :key="grocery.id">
        <td> {{ grocery.name }}</td>
        <td class="text-align-right">{{ grocery.productPrice.toFixed(2) }} </td>
        <td class="text-align-right"><input type="number" v-model="grocery.productQuantity"></td>
        <td class="text-align-right">{{ (grocery.productPrice * grocery.productQuantity).toFixed(2)  }}</td>
        <td class="text-align-right">{{ (grocery.productPrice * grocery.productQuantity).toFixed(2)  }}</td>
        <td class="text-align-right"><a :href="`/edit/${grocery.id}`">Bewerken</a></td>
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

.text-align-right {
  text-align-last: right;
}
</style>

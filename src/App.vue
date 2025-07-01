<script setup>
import {ref, computed} from 'vue';

const product = ref({
    productName: 'Rijst',
    productPrice: 1.50,
    productQuantity: 3
});

const products = ref([product, product, product]);

const subTotal = computed(() => {
    return product.value.productPrice * product.value.productQuantity
})      

</script>

<template>
    <table @click="wijzigAantalProducten">
    <thead>
    <tr>
        <th>Product</th>
        <th>Prijs</th>
        <th>Hoeveelheid</th>
        <th>Subtotaal</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="product in products">
        <td> {{ product.productName }}</td>
        <td class="amount">{{ product.productPrice }}</td>
        <td class="amount"><input type="text" v-model="product.productQuantity"></td>
        <td class="amount">{{ subTotal }}</td>
    </tr>
    </tbody>
    <tfoot>
        <tr>
    <td colspan="3"><strong>Totaal</strong></td>
   <td><strong></strong></td>
    </tr>
    </tfoot>
</table>
</template>

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

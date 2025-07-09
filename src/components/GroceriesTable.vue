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
      <tr v-for="grocery in props.groceries" :key="grocery.id">
        <td>{{ grocery.name }}</td>
        <td class="text-align-right">{{ grocery.price.toFixed(2) }}</td>
        <td class="text-align-right">
          <input type="number" v-model="grocery.amount" />
        </td>
        <td class="text-align-right">
          {{ (grocery.price * grocery.amount).toFixed(2) }}
        </td>
        <td class="text-align-right">
          <RouterLink :to="`/edit/${grocery.id}`">Bewerken</RouterLink>
        </td>
        <td class="text-align-right">
          <button @click="removeGrocery(`${grocery.id}`)">Verwijderen</button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3"><strong>Totaal</strong></td>
        <td>
          <strong>{{ totalCost.toFixed(2) }}</strong>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script setup>
import { computed } from "vue";
import { removeGrocery } from "../domains/groceries/store";
import { RouterLink } from "vue-router";

const props = defineProps(["groceries"]);

const totalCost = computed(() => {
  return props.groceries.reduce(
    (sum, grocery) => sum + grocery.price * grocery.amount,
    0
  );
});
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

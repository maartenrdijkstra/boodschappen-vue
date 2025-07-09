<template>
  <form @submit.prevent="saveGroceryItem">
    <table>
      <tbody>
        <tr>
          <td class="text-align-left">
            <label for="name">Naam</label>
          </td>
          <td>
            <input v-model="newGrocery.name" id="naam" type="text" />
          </td>
        </tr>
        <tr>
          <td class="text-align-left">
            <label for="price">Prijs</label>
          </td>
          <td>
            <input
              type="number"
              step=".01"
              min="0"
              v-model="newGrocery.price"
              id="price"
            />
          </td>
        </tr>
        <tr>
          <td class="text-align-left">
            <label for="amount">Hoeveelheid</label>
          </td>
          <td>
            <input
              type="number"
              min="0"
              v-model="newGrocery.amount"
              id="amount"
            />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">
            <button type="submit">Submit</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </form>
</template>

<script setup>
const emit = defineEmits(["save"]);
const props = defineProps({
  grocery: Object,
});

const newGrocery = { ...props.grocery };

const saveGroceryItem = () => {
  emit("save", newGrocery);
};
</script>

<style scoped>
.text-align-left {
  text-align: left;
}

td {
  padding: 0 1rem;
}
</style>

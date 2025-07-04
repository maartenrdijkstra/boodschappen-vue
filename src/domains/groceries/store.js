import {ref, computed} from 'vue'

// State
const groceries = ref([{
        id: 1,
        name: 'Rijst',
        price: 1.50,
        amount: 3,
    },
    {
        id: 2,
        name: 'Pasta',
        price: 2.00,
        amount: 2,
    },
    {
        id: 3,
        name: 'Bonen',
        price: 1.20,
        amount: 5,
    }
])


// Getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = (id) => computed(() => groceries.value.find(grocery => grocery.id == id));

// Actions
export const addGrocery = (grocery) => {
    console.log(grocery);
    groceries.value.push(grocery);
}
export const updateGrocery = (updated) => {
  const index = groceries.value.findIndex(g => g.id === updated.id)
  if (index !== -1) {
    groceries.value[index] = updated
  }
  console.log(groceries.value[index]);
}
export const removeGrocery = (id) => {
    groceries.value.splice(groceries.value.findIndex(grocery => grocery.id === id), 1)
}
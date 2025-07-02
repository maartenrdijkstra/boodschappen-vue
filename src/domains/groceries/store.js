import {ref, computed} from 'vue'

// State
const groceries = ref([{
        id: 1,
        name: 'Rijst',
        productPrice: 1.50,
        productQuantity: 3,
    },
    {
        id: 2,
        name: 'Pasta',
        productPrice: 2.00,
        productQuantity: 2,
    },
    {
        id: 3,
        name: 'Bonen',
        productPrice: 1.20,
        productQuantity: 5,
    }
])

// Getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = (id) => computed(() => groceries.value.find(grocery => grocery.id == id));

// Actions
export const addGrocery = (grocery) => groceries.value.push(grocery);

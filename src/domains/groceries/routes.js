import Create from './pages/CreatePage.vue'
import Edit from './pages/EditPage.vue'
import Overview from './pages/OverviewPage.vue'
import GroceryForm from './components/GroceryForm.vue'


export const routes = [
    {path: '/', component: Overview},
    {path: '/create', component: Create},
    {path: '/edit', component: Edit},
    {path: '/grocery', component: GroceryForm}
]

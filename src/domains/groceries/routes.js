import CreatePage from './pages/CreatePage.vue'
import EditPage from './pages/EditPage.vue'
import Overview from './pages/OverviewPage.vue'
import GroceryForm from './components/GroceryForm.vue'


export const routes = [
    {path: '/', component: Overview},
    {path: '/create', component: CreatePage},
    {path: '/edit', component: EditPage},
    {path: '/edit/:id', component: EditPage},
    {path: '/grocery', component: GroceryForm}
]

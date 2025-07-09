import CreatePage from './pages/CreatePage.vue'
import EditPage from './pages/EditPage.vue'
import Overview from './pages/OverviewPage.vue'


export const routes = [
    {path: '/', component: Overview},
    {path: '/create', component: CreatePage},
    {path: '/edit/:id', component: EditPage}
]
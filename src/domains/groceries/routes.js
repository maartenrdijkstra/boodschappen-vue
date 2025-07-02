import { createMemoryHistory, createRouter } from 'vue-router'
import AppView from '../../App.vue'
import CreateView from './pages/Create.vue'
import EditView from './pages/Edit.vue'
import OverviewView from './pages/Overview.vue'

const routes = [
    {path: '/', component: AppView},
    {path: '/create', component: CreateView},
    {path: '/edit', component: EditView},
    {path: '/overview', component: OverviewView},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
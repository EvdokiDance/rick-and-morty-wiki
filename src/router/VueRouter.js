import { createRouter, createWebHistory } from 'vue-router'

import PChararacterDetails from '../pages/PCharacterDetails/PCharacterDetails.vue'
import PHome from '../pages/PHome/PHome.vue'

const routes = [
  { path: '/', component: PHome},
  { path: '/character/:id?', name: 'character', component: PChararacterDetails },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router;
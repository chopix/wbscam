import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '@/views/CatalogView.vue'
import CartView from '@/views/CartView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/catalog/:id',
      name: 'catalog',
      component: CatalogView
    },
    {
      path: '/cart/:id',
      name: 'cart',
      component: CartView
    },
  ],
})

export default router

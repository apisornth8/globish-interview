import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/startPage',
      name: 'home',
      component: () => import('../views/StartPage.vue')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('../views/question.vue')
    },
    {
      path: '/question7',
      name: 'question7',
      component: () => import('../views/Question7.vue')
    },
    {
      path: '/gradual',
      name: 'gradual',
      component: () => import('../views/GradualView.vue')
    },
    {
      path: '/enthus',
      name: 'enthus',
      component: () => import('../views/EnthusView.vue')
    },
    {
      path: '/hobbyish',
      name: 'hobbyish',
      component: () => import('../views/HobbyishView.vue')
    },
    
  ]
})

export default router

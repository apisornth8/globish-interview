import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/startPage',
      name: 'home',
      component: () => import('../views/index.vue')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('../views/question.vue')
    },
    {
      path: '/knownquestion',
      name: 'knownQuestion',
      component: () => import('../views/knownQuestion.vue')
    },
    // {
    //   path: '/question3',
    //   name: 'question',
    //   component: () => import('../views/question3.vue')
    // },
    // {
    //   path: '/question4',
    //   name: 'question',
    //   component: () => import('../views/question4.vue')
    // },
    // {
    //   path: '/question5',
    //   name: 'question',
    //   component: () => import('../views/question5.vue')
    // },
    // {
    //   path: '/question5',
    //   name: 'question',
    //   component: () => import('../views/question6.vue')
    // },
    {
      path: '/summary',
      name: 'summary',
      component: () => import('../views/summary.vue')
    }
  ]
})

export default router

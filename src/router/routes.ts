import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: '/dashboard',
    children: [
      {
        name: 'Dashboard',
        path: '/dashboard',
        component: () => import('pages/Dashboard.vue')
      },
      {
        name: 'Payments',
        path: '/pagamentos',
        component: () => import('pages/Payments.vue')
      },
      {
        name: 'Invoices',
        path: '/invoices',
        component: () => import('pages/Invoices.vue')
      },
      {
        name: 'Insights',
        path: '/insights',
        component: () => import('pages/Insights.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

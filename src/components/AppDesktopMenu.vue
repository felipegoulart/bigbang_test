<template>
  <div>
    <q-list class="flex q-gutter-x-xs">
      <app-link
        v-for="(link, index) in links"
        :key="index"
        :label="link.label"
        :route="link.route"
      />
    </q-list>
  </div>
</template>

<script setup lang="ts">
import AppLink, { AppLinkProps } from './AppLink.vue'

const links: AppLinkProps[] = [
  {
    label: 'Dashboard',
    route: { name: 'Dashboard' }
  },
  {
    label: 'Pagamentos',
    route: { name: 'Payments' }
  },
  {
    label: 'Invoices',
    route: { name: 'Invoices' }
  },
  {
    label: 'Insights',
    route: { name: 'Insights' }
  }
]
</script>

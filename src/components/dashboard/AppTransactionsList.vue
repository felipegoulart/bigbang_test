<!-- eslint-disable max-len -->
<template>
  <section>
    <header class="flex full-width justify-between q-mb-md">
      <div class="flex items-center q-col-gutter-x-sm">
        <icon-box />
        <h3 class="q-ma-none text-h6">
          Transações recentes
        </h3>
        <span class="text-grey-7">
          últimos 7 dias
        </span>
      </div>

      <q-btn
        color="primary"
        flat
        label="Ver tudo"
        no-caps
      />
    </header>

    <div>
      <q-list
        separator
      >
        <q-item
          v-for="(item, index) in transactionsData"
          :key="index"
          clickable
        >
          <q-item-section avatar>
            <q-avatar
              :color="getAvatarColor()"
              icon="o_storefront"
              rounded
              text-color="white"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              {{ item.label }}
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label class="text-black text-weight-medium">
              {{ formatBRL(item.value) }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconBox from './IconBox.vue'
import { useDashboardStore } from 'stores/dashboard-store'
import { formatBRL } from 'src/utils/currency'

const { fetchTransactionsData, transactionsData } = useDashboardStore()

fetchTransactionsData()

function getAvatarColor () {
  const colors = [
    'lime-6',
    'teal-6',
    'brown-6',
    'deep-orange-6',
    'yellow-6'
  ]

  // Gera um número aleatório de 0 à 4.
  const index = Math.floor(Math.random() * 5)

  return colors[index]
}
</script>

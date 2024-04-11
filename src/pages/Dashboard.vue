<template>
  <q-page class="dashboard">
    <app-page-container>
      <section class="column justify-center">
        <h2 class="q-my-none text-h6 text-white">
          Saldo total
        </h2>

        <div class="flex items-center justify-between">
          <div class="flex q-col-gutter-sm">
            <span class="text-h4 text-white">
              {{ balanceBRL }}
            </span>

            <div class="flex items-center q-col-gutter-sm">
              <icon-lightning />
              <span class="text-white">
                Rendendo {{ performance }}%
              </span>
            </div>
          </div>

          <div class="q-gutter-sm">
            <q-btn
              align="left"
              class="dashboard__button-send-money"
              color="primary"
              icon="o_send"
              no-caps
              padding="8px 16px"
              unelevated
            >
              <span class="dashboard__button-send-money-label">
                Enviar dinheiro
              </span>
            </q-btn>

            <q-btn
              color="primary"
              icon="o_add"
              no-caps
              padding="8px"
              unelevated
            />
          </div>
        </div>
      </section>
    </app-page-container>

    <div class="dashboard__summary-container q-mt-xl">
      <div class="dashboard__cards-container">
        <app-page-container class="dashboard__card-list">
          <app-dashboard-card-list :data="summaryData" />
        </app-page-container>
      </div>

      <app-page-container class="bg-white dashboard__summary">
        <div class="q-col-gutter-lg q-my-lg row">
          <div class="col-12 col-md-6">
            <app-transactions-list :items="[]" />
          </div>

          <div class="col-12 col-md-6">
            <app-analysis />
          </div>
        </div>
      </app-page-container>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDashboardStore } from 'stores/dashboard-store'
import { formatBRL } from 'src/utils/currency'

import IconLightning from 'src/components/dashboard/IconLightning.vue'
import AppPageContainer from 'src/components/AppPageContainer.vue'
import AppDashboardCardList from 'src/components/dashboard/AppDashboardCardList.vue'
import AppTransactionsList from 'src/components/dashboard/AppTransactionsList.vue'
import AppAnalysis from 'src/components/dashboard/AppAnalysis.vue'

const { fetchSummaryData, summaryData } = useDashboardStore()

fetchSummaryData()

defineOptions({
  name: 'IndexPage'
})

const performance = computed(() => {
  return Math.floor(summaryData.performance)
})

const balanceBRL = computed(() => {
  return formatBRL(summaryData.balance)
})
</script>

<style lang="scss">
.dashboard {
  display: grid;
  grid-template-rows: min(160px, 100%) 1fr;

  &__button-send-money {
    width: 254px;

    &-label {
      flex: 1
    }
  }

  &__summary {
    grid-row: 2;
  }

  &__cards-container {
    // Havia outras formas de posicionar os cards entre as duas cores, como position absolute.
    // Mas essa é a forma com menos tradeoff.
    background: linear-gradient($dark 50%, white 50%) !important;
    width: 100%;
  }
}
</style>

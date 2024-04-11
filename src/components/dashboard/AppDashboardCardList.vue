<template>
  <div class="flex items-center q-col-gutter-md q-mb-md">
    <icon-bubble />
    <span class="text-h6 text-white">
      Painel de estatísticas
    </span>
    <span class="text-grey-7">
      últimos {{ filterByDays }}
    </span>
  </div>

  <q-carousel
    v-if="screen.lt.md"
    v-model="slide"
    animated
    arrows
    class="bg-transparent"
    control-color="amber"
    padding
    swipeable
    transition-next="o-slide-left"
    transition-prev="o-slide-right"
  >
    <q-carousel-slide name="bussinessAcount">
      <app-dashboard-card
        title="Conta PJ"
        :value="data.bussinessAcount"
      />
    </q-carousel-slide>

    <q-carousel-slide name="receipts">
      <app-dashboard-card
        title="Recebimentos"
        :value="data.receipts"
      />
    </q-carousel-slide>

    <q-carousel-slide name="gain">
      <app-dashboard-card
        title="Lucro"
        :value="data.gain"
      />
    </q-carousel-slide>
  </q-carousel>

  <div
    v-else
    class="app-dashboard-card-list__desktop q-col-gutter-x-lg row"
  >
    <div class="col-4">
      <app-dashboard-card
        title="Conta PJ"
        :value="data.bussinessAcount"
      />
    </div>

    <div class="col-4">
      <app-dashboard-card
        class="col-4"
        title="Recebimentos"
        :value="data.receipts"
      />
    </div>

    <div class="col-4">
      <app-dashboard-card
        class="col-4"
        title="Lucro"
        :value="data.gain"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import AppDashboardCard from 'src/components/dashboard/AppDashboardCard.vue'
import { SummaryData } from 'stores/dashboard-store'
import { computed, ref } from 'vue'
import IconBubble from './IconBubble.vue'

const prop = defineProps<{
  data: SummaryData
}>()

/* Cabeçalho */
const filterByDays = computed(() => {
  const filteredByDays = prop.data.filteredByDays
  return `${filteredByDays} dia${filteredByDays === 1 ? '' : 's'}`
})

/* Slides */
const { screen } = useQuasar()

const slide = ref('bussinessAcount')
</script>

<style lang="scss">
  .app-dashboard-card-list {
    &__desktop {

    }
  }
</style>

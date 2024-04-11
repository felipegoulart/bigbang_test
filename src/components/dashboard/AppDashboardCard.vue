<template>
  <q-card
    class="app-dashboard-card shadow-16"
    square
  >
    <q-card-section class="app-dashboard-card__container">
      <header>
        <h3 class="q-my-none text-body1 text-weight-medium">
          {{ title }}
        </h3>
      </header>

      <div class="app-dashboard-card__value-container">
        <p class="text-h4 text-weight-medium">
          {{ formatBRL(value) }}
        </p>
      </div>
    </q-card-section>

    <q-card-actions class="no-wrap">
      <q-btn
        class="full-width"
        color="grey-7"
        label="Ver detalhes"
        outline
        square
        unelevated
      />
      <q-btn
        color="grey-7"
        icon="o_menu"
        outline
        square
        unelevated
      />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { formatBRL } from 'src/utils/currency'

defineProps<{
  title: string
  value: number
}>()
</script>

<style lang="scss">
.app-dashboard-card {
  max-width: 350px;
  height: 210px;
  display: flex;
  flex-direction: column;

  &__container {
    flex: 1;
  }

  &__value-container {
    display: flex;
    height: 100%;
    align-items: center;
  }
}
</style>

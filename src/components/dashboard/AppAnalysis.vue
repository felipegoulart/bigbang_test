<!-- eslint-disable max-len -->
<template>
  <section>
    <header class="flex full-width justify-between q-mb-md">
      <div class="flex items-center q-col-gutter-x-sm">
        <icon-circle />
        <h3 class="q-ma-none text-h6">
          Análise geral
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

    <div class="column">
      <q-separator />
      <div class="flex justify-between q-my-md">
        <div>
          <h4 class="q-my-none text-body1 text-weight-medium">
            Ganhos
          </h4>
          <span class="q-mt-md text-h5 text-weight-bold">
            {{ formatBRL(6000) }}
          </span>
        </div>

        <div>
          <h4 class="q-my-none text-body1 text-weight-medium">
            Saídas
          </h4>
          <span class="q-mt-md text-h5 text-weight-bold">
            {{ formatBRL(3000) }}
          </span>
        </div>
      </div>
      <q-separator />

      <q-list dense>
        <div>
          <q-item dense>
            <q-item-section avatar>
              <q-avatar
                icon="o_local_mall"
              />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                Compras
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-item-label class="text-black text-weight-medium">
                62%
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item dense>
            <q-linear-progress
              rounded
              size="lg"
              :value=".62"
            />
          </q-item>
        </div>

        <div>
          <q-item dense>
            <q-item-section avatar>
              <q-avatar
                icon="o_barcode"
              />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                Boletos
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-item-label class="text-black text-weight-medium">
                14%
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item dense>
            <q-linear-progress
              rounded
              size="lg"
              :value=".14"
            />
          </q-item>
        </div>

        <div>
          <q-item dense>
            <q-item-section avatar>
              <q-avatar
                icon="o_show_cart"
              />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                Investimentos
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-item-label class="text-black text-weight-medium">
                5%
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item dense>
            <q-linear-progress
              rounded
              size="lg"
              :value=".5"
            />
          </q-item>
        </div>
      </q-list>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconCircle from './IconCircle.vue'
import { formatBRL } from 'src/utils/currency'
</script>

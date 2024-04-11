<template>
  <q-item
    active-class="app-link app-link--active"
    clickable
    tag="a"
    :to="route"
  >
    <q-icon
      v-if="icon"
      :name="icon"
    />
    <q-item-section>{{ label }}</q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { QIcon } from 'quasar'

defineOptions({
  name: 'AppLink'
})

export interface AppLinkProps {
  label: string;
  route: string | object;
  icon?: string;
}

defineProps<AppLinkProps>()
</script>

<style lang="scss">
.app-link {
  &--active {
    background-color: $secondary;
    ;
  }
}

.q-item {
  padding: 8px 20px;
}
</style>

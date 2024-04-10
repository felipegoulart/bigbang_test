<template>
  <q-header class="app-navbar">
    <q-toolbar class="app-navbar__toolbar">
      <AppLogo />

      <AppDesktopMenu />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import AppLogo from './AppLogo.vue'

</script>

<style lang="scss">
.app-navbar {
  background-color: transparent !important;
  padding: 20px 28px;

  &__toolbar {
    display: flex;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto
  }
}
</style>

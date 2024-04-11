<template>
  <q-header class="app-navbar">
    <q-toolbar class="app-navbar__toolbar">
      <router-link
        class="flex"
        to="/"
      >
        <app-logo />
      </router-link>

      <app-desktop-menu />

      <!-- TODO: Transformar em um botão dropdown -->
      <q-icon
        name="o_notifications"
        size="24px"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import AppDesktopMenu from './AppDesktopMenu.vue'
import AppLogo from './AppLogo.vue'
</script>

<style lang="scss">
.app-navbar {
  background-color: $dark !important;
  padding: 16px 28px;

  &__toolbar {
    display: flex;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }
}
</style>

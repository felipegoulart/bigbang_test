<template>
  <q-layout view="hHh lpR fFf">
    <AppNavbar />

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import AppNavbar from 'src/components/AppNavbar.vue'

defineOptions({
  name: 'MainLayout'
})
</script>

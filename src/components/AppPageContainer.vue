<template>
  <div class="app-page-container">
    <slot />
  </div>
</template>

<style lang="scss">
.app-page-container{
  display: grid;
  grid-template-columns: 1fr min(1024px, 100%) 1fr;
  padding: 0 4vmin;

  & > * {
    grid-column: 2;
  }
}
</style>

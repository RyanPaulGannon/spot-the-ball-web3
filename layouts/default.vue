<template>
  <div class="layout">
    <!-- Header -->
    <div>
      <slot name="header" />
    </div>
    <!-- Entry -->
    <div>
      <slot name="grid" />
    </div>
    <!-- STB -->
    <div>
      <slot name="entry" />
    </div>
  </div>
</template>

<style>
.layout {
  height: 100vh;
  max-height: 100vh;
  height: 100svh;
  max-height: 100svh;
}
</style>

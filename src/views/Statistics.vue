<template>
  <div class="nav-wrapper">
    <div class="content">
      Statistics.vue
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Statistics',
  };
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content {
    border: 1px solid blue;
    overflow: auto;
    flex-grow: 1;
  }
</style>

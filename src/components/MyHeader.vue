<script setup lang="ts"></script>

<template>
  <header>
    <div id="header-content">
      <h2>Les articles Ouais Ouais</h2>
    </div>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  padding: 7px 16px;
  min-height: 60px;
  background-color: #323232;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);
  box-shadow: rgba(159, 127, 126, 0.12) 10px 1px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  #header-content {
    display: flex;
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  summary: { type: String, required: true },
});
</script>

<template>
  <PrimeCard style="width: 25rem; overflow: hidden">
    <template #title>{{ props.title }}</template>
    <template #subtitle>{{ props.subtitle }}</template>
    <template #content>
      <p class="m-0">
        {{ props.summary }}
      </p>
    </template>
  </PrimeCard>
</template>

<style scoped></style>

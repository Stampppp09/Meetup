<template>
  <h2>the test page</h2>
  <div>store.count</div>
</template>

<script setup>
import { counterStore } from '@/stores/counter'

// access the `store` variable anywhere in the component ✨
const store = counterStore()
</script>
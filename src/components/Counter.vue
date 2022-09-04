<template>
  <h1>Count: {{ state.count }}</h1>
  <h2>Doubled Count: {{ state.doubledCount }}</h2>
  <button @click="incrementCount">Counter + 1</button>
</template>

<script setup>
import { reactive, computed } from "vue";

const state = reactive({
  count: 0,
  doubledCount: computed(() => state.count * 2),
});

const incrementCount = () => {
  state.count += 1;
};
</script>
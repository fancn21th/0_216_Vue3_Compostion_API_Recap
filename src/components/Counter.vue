<template>
  <h1>Count: {{ count }}</h1>
  <h2>Doubled Count: {{ doubledCount }}</h2>
  <button @click="incrementCount">Counter + 1</button>
</template>

<script setup>
import counter from "../utils/counter";

const { count, doubledCount, incrementCount } = counter;
</script>
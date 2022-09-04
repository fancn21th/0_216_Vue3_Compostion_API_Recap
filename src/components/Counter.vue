<template>
  <h1>Count: {{ state.count }}</h1>
  <h2>Doubled Count: {{ state.doubledCount }}</h2>
  <button @click="incrementCount">Counter + 1</button>
</template>

<script setup>
import useCounter from "../utils/counter";

const [state, incrementCount] = useCounter();
</script>
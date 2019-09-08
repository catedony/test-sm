<template>
  <main class="main">
    <counter-display />
    <div>
      <div>Array length:</div>
      <div>{{ this.$store.state.testArray.length }}</div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import CounterDisplay from '@/components/CounterDisplay.vue'

export default {
  name: 'main',
  components: {
    CounterDisplay
  }
}
</script>

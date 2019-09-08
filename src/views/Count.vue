<template>
  <main class="count">
    <counter-display />
    <counter-controls />
  </main>
</template>

<script>
import CounterDisplay from '@/components/CounterDisplay.vue'
import CounterControls from '@/components/CounterControls.vue'
export default {
  name: 'count',
  components: {
    CounterDisplay,
    CounterControls
  }
}
</script>

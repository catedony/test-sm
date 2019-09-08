<template>
  <main class="main">
    <value-display :title="titles.count" :value="count" />
    <value-display :title="titles.arrayLength" :value="arrayLength" />
  </main>
</template>

<script>

import ValueDisplay from '@/components/ValueDisplay.vue'

export default {
  data: function () {
    return {
      titles: {
        count: 'Count',
        arrayLength: 'Array length'
      }
    }
  },
  computed: {
    arrayLength () {
      return this.$store.state.testArray.length
    },
    count () {
      return this.$store.state.testCount
    }
  },
  components: {
    ValueDisplay
  }
}
</script>

<template>
   <div>
      <div>Counter:</div>
      <div>{{ counterValue }}</div>
    </div>
</template>

<script>
export default {
  computed: {
    counterValue () {
      return this.$store.state.testCount
    }
  }
}
</script>

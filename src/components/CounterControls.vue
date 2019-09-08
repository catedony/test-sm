<template>
    <div>
        <button @click="updateCounter(1)">+</button>
        <button @click="updateCounter(-1)">-</button>
    </div>
</template>

<script>
export default {
  methods: {
    updateCounter (val) {
      this.$store.commit('updateCount', val)
    }
  }
}
</script>

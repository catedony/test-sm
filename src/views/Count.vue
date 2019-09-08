<template>
  <main class="count">
    <value-display :title="'Count'" :value="count" />
    <div>
      <button class="count__btn btn" @click="updateCount(1)">+</button>
      <button class="count__btn btn" @click="updateCount(-1)">-</button>
    </div>
  </main>
</template>

<script>
import ValueDisplay from '@/components/ValueDisplay.vue'
export default {
  computed: {
    count () {
      return this.$store.state.testCount
    }
  },
  components: {
    ValueDisplay
  },
  methods: {
    updateCount (val) {
      this.$store.commit('updateCount', val)
    }
  }
}
</script>

<style scoped>
.count__btn {
  width: 30px;
  margin: 0 10px;
}
</style>

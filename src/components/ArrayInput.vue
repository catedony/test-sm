<template>
    <form @submit.prevent="addToArray">
        <input type="text" v-model="newElem" required>
        <button type="submit">Add</button>
    </form>
</template>

<script>
export default {
  data: function () {
    return {
      newElem: ''
    }
  },
  methods: {
    addToArray () {
      if (!this.newElem.trim()) return
      this.$store.state.testArray.push(this.newElem)
      this.newElem = ''
    }
  }
}
</script>

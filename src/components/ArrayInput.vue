<template>
    <form @submit.prevent="pushNewElem">
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
    pushNewElem () {
      if (!this.newElem.trim()) return
      this.$store.commit('addToArray', this.newElem)
      this.newElem = ''
    }
  }
}
</script>

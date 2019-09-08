<template>
    <div>
        <div>{{elemValue}}</div>
        <button @click="removeElem()">x</button>
    </div>
</template>

<script>
export default {
  props: {
    elemValue: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeElem () {
      this.$store.commit('removeFromArray', this.index)
    }
  }
}
</script>

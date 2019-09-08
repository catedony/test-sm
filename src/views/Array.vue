<template>
  <main class="array">
    <ul>
      <li v-for="(elem, i) in array" :key="i">
        <array-elem :elemValue="elem" :index="i" />
      </li>
    </ul>
    <array-input />
  </main>
</template>

<script>
import ArrayElem from '@/components/ArrayElem.vue'
import ArrayInput from '@/components/ArrayInput.vue'
export default {
  name: 'array',
  computed: {
    array () {
      return this.$store.state.testArray
    }
  },
  components: {
    ArrayElem,
    ArrayInput
  }
}
</script>

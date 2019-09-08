<template>
  <p>{{ title }}:
    <span>{{ value }}</span>
  </p>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>

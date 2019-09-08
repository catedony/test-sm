<template>
  <main class="array">
    <ul v-if="array.length" class="array__list">
      <li class="array__item" v-for="(elem, i) in array" :key="i">
        <button class="array__remove-btn" @click="removeElem(i)">&#10008;</button>
        <div class="array__elem">{{ elem }}</div>
      </li>
    </ul>
    <p v-else>Array is empty</p>
    <form @submit.prevent="pushNewElem">
      <input class="array__input" type="text" v-model="newElem" required>
      <button class="array__add-btn btn" type="submit">Add</button>
    </form>
  </main>
</template>

<script>
export default {
  data: function () {
    return {
      newElem: ''
    }
  },
  computed: {
    array () {
      return this.$store.state.testArray
    }
  },
  methods: {
    removeElem (index) {
      this.$store.commit('removeFromArray', index)
    },
    pushNewElem () {
      if (!this.newElem.trim()) {
        this.newElem = ''
        return
      }
      this.$store.commit('addToArray', this.newElem)
      this.newElem = ''
    }
  }
}
</script>

<style scoped>
.array {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.array__list {
  margin: 10px 0 30px;
  padding: 0;
  max-width: 100%;
  overflow: auto;
}
.array__item {
  list-style: none;
  display: flex;
  align-items: flex-start;
  padding: 5px 10px;
}
.array__elem {
  text-align: left;
}
.array__remove-btn {
  background-color: unset;
  border: none;
  color: rgba(255, 0, 0, 0.5);
}
.array__remove-btn:hover {
  color: rgba(255, 0, 0, 1);
}
.array__remove-btn:focus {
  outline: none;
  color: rgba(255, 0, 0, 1);
}
.array__input {
  border-radius: 10px;
  padding: 5px 7px;
  border: 2px solid lightgrey;
  transition: all 150ms;
}
.array__input:focus {
  border-color: #42b983;
  outline: none;
}
.array__add-btn {
  margin-left: 10px;
}
</style>

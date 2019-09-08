<template>
  <div id="app">
    <header class="nav">
      <router-link to="/">Main</router-link>
      <router-link to="/test-count">Test count</router-link>
      <router-link to="/test-array">Test array</router-link>
    </header>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  padding: 30px;
}

.nav a {
  padding: 30px;
  font-weight: bold;
  color: #2c3e50;
}

.router-link-exact-active {
  color: #42b983;
}
</style>

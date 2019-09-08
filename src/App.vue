<template>
  <div id="app">
    <header class="nav">
      <router-link class="nav__link" to="/">Main</router-link>
      <router-link class="nav__link" to="/test-count">Test count</router-link>
      <router-link class="nav__link" to="/test-array">Test array</router-link>
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
.nav__link {
  padding: 30px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.nav__link:hover {
  text-decoration: underline;
}
.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}
.btn {
  background-color: #42b983;
  color: #fff;
  font-weight: bold;
  padding: 5px 10px;
  border: 1px solid #42b983;
  border-radius: 5px;
  transition: all 150ms;
}
.btn:hover {
  box-shadow: 1px 1px 2px #9da5a2;
}
.btn:focus {
  outline-color: #78daae;
}
</style>

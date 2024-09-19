<script setup lang="ts">

</script>

<template>
  <div id="app">
    <h1>Welcome to the App</h1>
    <router-view></router-view>
    <router-link to="/login">Go to Login</router-link>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <FormComponent /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Greet name="Bruce" />
  <Greet name="Clark" />
  <Greet name="Diana" />
</template>

<script>
// import FormComponent from './components/FormComponent.vue';
import Greet from './components/Greet.vue';

export default {
  name: 'App',
  components: {
    // FormComponent
    Greet
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <Navbar class="navbar" />
    <RouterView class="router-view" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  background-color: #f9f9f5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.router-view {
  flex: 1 1 auto;
  flex: 1;
  padding: 0.1rem;
}
.navbar,
.footer {
  flex: 0 0 auto;
}
::-webkit-scrollbar {
  width: 0.5rem;
}
::-webkit-scrollbar-track {
  background: #deca8d;
}
::-webkit-scrollbar-thumb {
  background: #242c41;
  border-radius: 1rem;
}

::-webkit-scrollbar-track:hover {
  background: #d09d4c;
}
</style>

<template>
  <div>
    <Header />
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Navbar/Header.vue'
import Nav from './components/Navbar/Nav.vue'

export default {
  name: 'app',
  components: {
    Header,
    Nav
  }
}
</script>

<style scoped>
  .no-padding {
    padding: 0;
    margin: 0;
  }
</style>
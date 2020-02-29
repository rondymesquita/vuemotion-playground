<template>
  <div id="app">
    <ThemeProvider :theme='t'>
      <button @click='toggle'>Toggle Theme</button>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </ThemeProvider>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ThemeProvider from './ThemeProvider.vue'

const light = {
  name: 'light',
  colors: {
    primary: '#8ff7a7',
    secondary: '#50808e',
    background: '#fff',
    foreground: '#2c3e50'
  }
}

const dark = {
  name: 'dark',
  colors: {
    primary: '#028090',
    secondary: '#a8a8a8',
    background: '#1a1a1a',
    foreground: '#eee'
  }
}

export default {
  name: 'App',
  components: {
    HelloWorld,
    ThemeProvider
  },
  data () {
    return {
      t: dark
    }
  },
  created () {
    // console.log('>>> app theme', this.theme.name);
  },
  methods: {
    toggle () {
      this.t = this.t.name === light.name
        ? dark
        : light
      // this.setTheme(t)
      console.log('theme', this.t.name);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div>
    <p>Theme Provider</p>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'ThemeProvider',
  provide () {
    return {
      $theme: this.theme
    }
  },
  props: {
    theme: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>

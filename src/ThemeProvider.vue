<template>
  <div>
    <p>Theme Provider</p>
    <!-- <p>{{theme}}</p> -->
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'ThemeProvider',
  // provide () {
  //   return {
  //     theme: this.t
  //   }
  // },
  // props: {
  //   theme: {
  //     type: Object,
  //     required: true
  //   }
  // },
  data () {
    return {
      t: this.theme
    }
  }
}
</script>

<style lang="css" scoped>
</style>

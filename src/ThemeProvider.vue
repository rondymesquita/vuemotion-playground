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
  props: {
    theme: {
      type: Object,
      required: true
    }
  },
  provide () {
    return {
      theme: () => this.t
    }
  },
  watch: {
    theme: {
      handler (_theme) {
        console.log('prop changed', _theme.name);
        // this.t = _theme
      },
      immediate: true
    }
  },
  computed: {
    t () {
      return this.theme
    }
  }
  // data () {
  //   return {
  //     t: undefined
  //   }
  // },
}
</script>

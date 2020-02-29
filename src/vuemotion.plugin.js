import { css } from "emotion";

const plugin = {
  installMixin: function (Vue, options) {
    Vue.mixin({
      data () {
        return {
          theme: options.theme,
          classes: undefined
        }
      },
      watch: {
        'themeName': {
          handler () {
            const theme = this.theme
            const {style} = this.$options
 
            console.log('>>> called watcher', theme.name, style);
            if (!style) return;

            const s = style({theme})
            this.classes = css(s)
          },
          immediate: true
        }
      },
      computed: {
        themeName () {
          return this.theme.name
        }
      },
      methods: {
        setTheme(theme) {
          console.log('test Changed');
          this.theme = theme
          const {style} = this.$options
          console.log('>>>>>>', this);
          const s = style({theme})
          this.classes = css(s)
        }
      }
    })
  },
  install: function (Vue, options) {
    console.log('===> Plugin installed', options);
    this.installMixin(Vue, options)
    Vue.prototype.$myMethod = function () {
      // some logic ...
    }
  }
}

export default plugin

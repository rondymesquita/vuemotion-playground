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
      created () {
        // console.log('created', this.style);
      },
      watch: {
        style: {
          handler (_style) {
            if (!_style) return;
            this.classes = css(_style({theme: this.theme}))
          },
          immediate: true
        }
      },
      // computed: {
      //   themeName () {
      //     console.log('====> computed', this.theme);
      //     return this.theme.name
      //   }
      // }
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

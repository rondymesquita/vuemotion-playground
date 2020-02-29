import { css } from "emotion";

const plugin = {
  installMixin: function (Vue) {

    Vue.mixin({
      data () {
        return {
          // theme: options.theme,
          // classes: undefined
        }
      },
      created () {
        // console.log('created', this.style);
      },
      computed: {
        classes () {
          return css(this.style({theme: this.theme()}))
        }
      },
      watch: {
        style: {
          handler (_style) {
            if (!_style) return;
            this.classes = css(_style({theme: this.theme()}))
          },
          immediate: true
        },
        theme: {
          handler (theme) {
            if (!this.style) return;
            console.log('>> th');
            this.classes = css(this.style({theme}))
          },
          immediate: true
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

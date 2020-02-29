<template>
  <div class="hello" :class='classes'>
    <div class="header" style="display: flex">
      <h1>{{ msg }}</h1>
    </div>

    <p>style-{{classes}}</p>
    <p>theme: {{theme()}}</p>
    <h3>Installed CLI Plugins</h3>

    <div class="footer" style="display: flex">
      <a class="button">Button</a>
    </div>
  </div>
</template>

<script>

const color = "white";

const style = ({theme}) => {
  return `
    border: 1px solid ${theme.colors.primary};
    padding: 12px;

    .footer {
      background: ${theme.colors.secondary};
      padding: 6px;
    }

    .button {
      padding: 6px;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.foreground};
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    }
`
}

export default {
  name: "HelloWorld",
  inject: ['theme'],
  props: {
    msg: String
  },
  computed: {
    t (_t) {
      console.log('test', _t);
      return this.theme
    }
  },
  data() {
    return {
      style
    };
  }
};
</script>

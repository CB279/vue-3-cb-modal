# Other

> <a href="https://github.com/CB279/vue-3-cb-validate">validate</a>

> <a href="https://github.com/CB279/vue-3-cb-alert">alert</a>

> <a href="https://github.com/CB279/vue-3-cb-grid">grid</a>

> <a href="https://github.com/CB279/vue-3-cb-datepicker">datepicker</a>

> <a href="https://github.com/CB279/vue-3-cb-select">select</a>

> <a href="https://github.com/CB279/vue-3-cb-sidenav">sidenav</a>

> <a href="https://github.com/CB279/vue-3-cb-paginate">paginate</a>

## Development

npm install @vue-cb/modal

## Config

```js
import modal from "@vue-cb/modal";

createApp(app).use(modal);
```

## Usage

```html
<button @click="state.modal = true">open</button>
<v-modal v-model="state.modal" auto-close> i'm a modal </v-modal>
```

## Props

| name           | value   | default |
| -------------- | ------- | ------- |
| close          | Boolean | false   |
| autoClose      | Boolean | false   |
| animatonMask   | string  | -       |
| animationAlert | string  | -       |

## 📑 License

[MIT License](./LICENSE)

# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### README starts
Assessment:
Build a automated cooking bot system where you can control the number of worker-bot.

App screenshot:
![alt text](https://github.com/bingxuan3133/mcbot/blob/main/src/screenshots/screenshot_001.png "Logo Title Text 1")

- use vuejs because I wanted to visualize the progress bar
- everything states and logics goes into vue "Composables" - e.g.: useOrderBotDispatcher
- everything views goes into views or components

- orders are only sorted for display using vue computed, all orders are always in the same array
- setInterval is used to incrementally increase progress bar value
- setInterval ids are saved, so it is able to clear when bot are removed mid progress

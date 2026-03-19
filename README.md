# README
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

## Assessment
Build a automated cooking bot system where you can control the number of worker-bot.

### App screenshot:
![alt text](https://github.com/bingxuan3133/mcbot/blob/main/src/screenshots/screenshot_001.png "Logo Title Text 1")

### Notes:
- use vuejs because I wanted to visualize the progress bar
- everything states and logics goes into vue "Composables" - e.g.: useOrderBotDispatcher
- everything views goes into views or components

- orders are only sorted for display using vue computed, all orders are always in the same array
- setInterval is used to incrementally increase progress bar value
- setInterval ids are saved, so it is able to clear when bot are removed mid progress

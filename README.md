# Spawn Webpack Plugin

> Run terminal commands with webpack

## Installation

```console
yarn add --dev spawn-webpack-plugin
```

or using NPM:

```console
npm i --save-dev spawn-webpack-plugin
```

## Usage

Inside a `webpack.config.js` file, on plugins entry, add:

```js
const SpawnPlugin = require('spawn-webpack-plugin')

// your config...

plugins: [
  // your plugins...
  new SpawnPlugin({
    command: 'yarn lint', // Required. Just put a valid command you can run on terminal
    sync: true, // Optional. `false` by default
    spawn: require('cross-spawn') // Optional. Just use it if you want to use another version of `require('child_process').spawn`
  })
]
```

## License

[MIT](https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md) &copy; Fernando Daciuk

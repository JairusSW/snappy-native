
# Node-Snappy
![npm](https://img.shields.io/npm/dt/node-snappy?style=flat-square) ![npm](https://img.shields.io/npm/v/node-snappy?style=flat-square) ![NPM](https://img.shields.io/npm/l/node-snappy?style=flat-square)

**Google Snappy Running In Native Bindings**

[GitHub](https://nodei.co/npm/node-snappy/)

#### Installation
```bash
~ npm install node-snappy --save
```

#### Usage
```js
const snappy = require('node-snappy')

const compressed = snappy.compress('Hello World')

console.log('Compressed: ', compressed)
//==> <Buffer 0b 28 48 65 6c>

const uncompressed = snappy.uncompress(compressed)

console.log('Uncompressed: ', uncompressed.toString())
//==> Hello World
```
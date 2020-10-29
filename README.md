
# Snappy Native
![npm](https://img.shields.io/npm/dt/snappy-native?style=flat-square) ![npm](https://img.shields.io/npm/v/snappy-native?style=flat-square) ![NPM](https://img.shields.io/npm/l/snappy-native?style=flat-square)

**Google Snappy Running In Native Bindings**

[![NPM](https://nodei.co/npm/snappy-native.png?downloads=true&downloadRank=true&stars=true&compact=true)](https://nodei.co/npm/snappy-native/)

#### Installation
```bash
~ npm install snappy-native --save
```

#### Usage
```js
const snappy = require('snappy-native')

const compressed = snappy.compress('Hello World')

console.log('Compressed: ', compressed)
//==> <Buffer 0b 28 48 65 6c>

const uncompressed = snappy.uncompress(compressed)

console.log('Uncompressed: ', uncompressed.toString())
//==> Hello World
```

#### Pure Javascript

**snappy-pure** Implements Snappy In Pure JavaScript
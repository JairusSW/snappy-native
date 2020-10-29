const snappy = require('./index.js')

const compressed = snappy.compress('Hello World')

console.log('Compressed: ', compressed)

const uncompressed = snappy.uncompress(compressed)

console.log('Uncompressed: ', uncompressed.toString())
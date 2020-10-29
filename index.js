const snappy = require('./snappy')

const compress = (data) => {

    return snappy.compressSync(Buffer.from(data))

}

const uncompress = (data) => {

    return snappy.uncompressSync(data)
    
}

module.exports = {
    compress: compress, 
    uncompress: uncompress
}
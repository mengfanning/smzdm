import crypto from 'crypto'

// md5 process
const md5 = str => crypto
  .createHash('md5')
  .update(str)
  .digest('hex')


export { md5 }

const fs = require('fs-extra')
const path  = require('path')

fs.removeSync('output/reports/', { recursive: true }, () => console.log('done'))
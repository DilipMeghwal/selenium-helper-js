const fs = require('fs-extra')
const path  = require('path')

fs.removeSync('output/reports', { recursive: true }, () => console.log('done'))

fs.mkdirs(path.join(__dirname, 'output/reports'), (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('reports directory created')
})
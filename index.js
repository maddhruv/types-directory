const fs = require('fs')

const directory = fs.readFileSync('./directory.json')

module.exports = JSON.parse(directory.toString())

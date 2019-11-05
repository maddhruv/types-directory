const fs = require('fs')
const fsExtra = require('fs-extra')
const git = require('simple-git')()

async function download () {
  const path = './disco'
  await git.clone('https://github.com/DefinitelyTyped/DefinitelyTyped', path)
  return path
}

(async () => {
  const path = await download()
  const filenames = await fs.readdirSync(`${path}/types`)
  console.log(filenames)
  const directory = JSON.stringify({
    types: filenames
  }, null, 2)
  await fs.writeFileSync('./directory.json', directory)
  await fsExtra.remove(path)
})()

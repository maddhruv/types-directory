const fs = require('fs');

(async () => {
  const filenames = await fs.readdirSync('./DefinitelyTyped/types')
  const directory = JSON.stringify({
    types: filenames
  }, null, 2)
  await fs.writeFileSync('./directory.json', directory)
})()

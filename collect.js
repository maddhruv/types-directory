const fs = require("fs");

(async () => {
  const filenames = await fs.readdirSync("./DefinitelyTyped/types");
  const directory = JSON.stringify({
    types: filenames
  });
  await fs.writeFileSync("./directory.json", directory);
})();

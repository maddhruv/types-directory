const git = require("simple-git/promise");
const { execSync } = require("child_process");

(async function() {
  const files = await git().status();
  if (files.modified.includes("directory.json")) {
    await git().addConfig("user.email", "dhruvjainpenny@gmail.com");

    await git().addConfig("user.name", "maddhruv");

    await git().add("./*");

    console.log("GIT ADD");

    await git().commit(":new_moon_with_face:  update directory");

    console.log("GIT committed");

    console.log(require("./package.json").version);

    await execSync("npm version minor");

    console.log(require("./package.json").version);
  } else {
    process.exit(1);
  }
})();

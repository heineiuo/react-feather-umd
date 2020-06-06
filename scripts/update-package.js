const yargs = require("yargs");
const fs = require("fs");
const path = require("path");
const argv = yargs.argv;

async function updatePkg() {
  const pkgContent = JSON.parse(
    await fs.promises.readFile(
      path.resolve(process.cwd(), "./package.json"),
      "utf8"
    )
  );

  const { name, version } = argv;
  console.log(`--name=${name} --version=${version}`);
  Object.assign(pkgContent, { name, version });
  console.log("update-package.js: ", pkgContent);

  await fs.promises.writeFile(
    path.resolve(process.cwd(), "./package.json"),
    JSON.stringify(pkgContent)
  );

  console.log(`Update package.json success`);
}

updatePkg();

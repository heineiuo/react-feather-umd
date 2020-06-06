const yargs = require("yargs");
const fs = require("fs");
const path = require("path");
const argv = yargs.argv;

function updatePkg(){
  const pkgContent = JSON.parse(
    await fs.promises.readFile(
      path.resolve(process.cwd(), "./package.json"),
      "uf8"
    )
  );

  const { name, version } = argv
  Object.assign(pkgContent, { name, version })

  await fs.promises.writeFile(
    path.resolve(process.cwd(), "./package.json"),
    JSON.stringify(pkgContent)
  );

  console.log(`Update package.json success`);
}

updatePkg()
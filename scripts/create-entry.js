const fs = require("fs").promises;
const path = require("path");
const yargs = require("yargs");

const argv = yargs.argv;

async function createEntry() {
  await fs.mkdir(path.resolve(process.cwd(), "./src"));
  const content = `export * from '${argv.pkg}';`;
  await fs.writeFile(
    path.resolve(process.cwd(), "./src/index.ts"),
    content,
    "utf8"
  );
}

createEntry();

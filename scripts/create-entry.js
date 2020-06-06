const fs = require("fs").promises;
const path = require("path");
const yargs = require("yargs");

const argv = yargs.argv;

async function createEntry() {
  try {
    await fs.mkdir(path.resolve(process.cwd(), "./src"));
    const content = `export * from '${argv.pkg}';`;
    await fs.writeFile(
      path.resolve(process.cwd(), "./src/index.ts"),
      content,
      "utf8"
    );
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

createEntry();

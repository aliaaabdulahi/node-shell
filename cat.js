const fs = require("fs");

function cat (fileName) {
  fs.readFile(fileName, "utf8", (err, files) => {
    if (err) {
      throw err;
    }
    process.stdout.write(files);
    process.stdout.write("prompt > ");
  });
}

module.exports = cat;
const compressing = require("compressing");
const fs = require("fs");
fs.writeFileSync("./build/package.json", fs.readFileSync("./package.json"));
compressing.zip
  .compressDir("./build", "build.zip")
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.error(err);
  });

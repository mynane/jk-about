const compressing = require("compressing");

compressing.zip
  .compressDir("./build", "build.zip")
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.error(err);
  });

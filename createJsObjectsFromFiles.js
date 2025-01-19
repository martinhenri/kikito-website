// importPosters.js
const fs = require("fs");
const path = require("path");

const directoryPath = "./public/MY_PATH";

// Function to read all .webp files from the directory
const importAll = (directory) => {
  return fs
    .readdirSync(directory)
    .filter((file) => path.extname(file).toLowerCase() === ".webp");
};

const posterFiles = importAll(directoryPath);

const posters = posterFiles.map((file) => {
  const fileName = path.basename(file, path.extname(file));
  return {
    src: path.join(directoryPath, file),
    original: path.join(directoryPath, file),
    caption: fileName.replace(/-/g, " "),
  };
});

console.log(posters);

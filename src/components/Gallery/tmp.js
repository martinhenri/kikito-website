import fs from "fs";
import path from "path";

// Get the list of files in the directory
const directoryPath = path.join(__dirname, "/digital-drawings");
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  // Generate the array
  const digitalDrawings = files.map((file) => ({
    src: `/digital-drawings/${file}`,
    original: `/digital-drawings/${file}`,
    caption: file.split(".")[0], // Use the file name as the caption
  }));

  console.log(digitalDrawings);
});

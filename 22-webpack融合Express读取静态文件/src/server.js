const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

// http://localhost:9000/ms-button
app.get("/", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/ms-button.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
})

app.get("/ms-image/", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/ms-image.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
})

app.use("/static", express.static(path.resolve(__dirname, "../dist")))

app.listen(9000, function () {
  console.log("Application is running on http://localhost:9000")
})

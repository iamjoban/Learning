const React = require("react");
const { renderToString } = require("react-dom/server");
import { renderToPipeableStream } from "react-dom/server";
import App from "./App";
import express from "express";
import path from "path";
import fs from "fs";
import { Writable, Transform } from "stream";
import { getServerData } from "./API";

function bin2String(array) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result += String.fromCharCode(parseInt(array[i], 2));
  }
  return result;
}

const stream = new Writable({
  write(data, _, done) {
    console.log(bin2String(data));
    done();
  },
});

const app = express();

function render() {
  let content = renderToString(<App />);
  return content;
}

function renderUsingStream(res) {
  let ctx = getServerData();
  console.log("a");
  const { pipe, abort } = renderToPipeableStream(<App ctx={ctx} />, {
    // bootstrapScripts: ["./bundle.js"],
    onShellReady() {
      console.log("onShellReady");
      res.setHeader("content-type", "text/html");
      res.write("<!DOCTYPE html>");
      // pipe(stream);
      // res.write();
      pipe(res);
    },
  });
  // const { startWriting, abort } = pipeToNodeWritable(<App />, res, {
  //   onReadyToStream() {
  //     console.log("error in streaming");
  //     startWriting();
  //   },
  //   onError() {
  //     console.log("error in streaming");
  //   },
  // });
}

app.get("/", (req, res) => {
  renderUsingStream(res);
  // const app = render();
  // const indexFile = path.resolve("./src/index.html");

  // fs.readFile(indexFile, "utf8", (err, data) => {
  //   if (err) {
  //     console.error("Something went wrong:", err);
  //     return res.status(500).send("Oops, better luck next time!");
  //   }
  //   console.log(app);
  //   return res.send(
  //     data.replace('<div id="app"></div>', `<div id="app">${app}</div>`)
  //   );
  // });
});

app.use(express.static("./dist"));

app.listen(1234, () => {
  console.log(`Server is listening on port 1234`);
});

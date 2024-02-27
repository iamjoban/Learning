const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/video.html");
});

const CHUNK_SIZE = 10 ** 6; // 1MB

app.get("/video", (req, res) => {
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires range header");
  }
  console.log("Range---", range);
  const videoPath = "video.mov";
  const videoSize = fs.statSync(videoPath).size;
  console.log("Video size", videoSize);
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  console.log("start", start);
  console.log("end", end);
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mov",
  };
  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, { start, end });
  videoStream.pipe(res);

  // res.end();
});

app.listen(8000, () => {
  console.log("Video streaming server is now on");
});

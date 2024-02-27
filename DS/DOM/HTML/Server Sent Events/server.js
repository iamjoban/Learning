const express = require("express");
const path = require("path");

const app = express();

app.get("/sse", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  const sendData = (data) => {
    console.log("data", data);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  const id = setInterval(() => {
    const message = `Server Time: ${new Date().toLocaleTimeString()}`;
    sendData({ message });
  }, 1000);

  req.on("close", () => {
    clearInterval(id);
    console.log("Con closed");
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client.html"));
});

app.listen(2000, () => {
  console.log("Listening to 2000");
});

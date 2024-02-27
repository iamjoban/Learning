import React, { useState } from "react";
import App from "../src/App";

const ServerApp = ({ ctx }) => {
  console.log("ServerApp");
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React with Webpack</title>
      </head>
      <body>
        <div id="app">
          <App ctx={ctx} />
        </div>
        <script src="bundle.js"></script>
      </body>
    </html>
  );
};

export default ServerApp;

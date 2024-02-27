import React from "react";

import { getServerData } from "../server/API";

const ctx = getServerData();

const Child = () => {
  console.log(ctx?.read(), "ctx.read()");
  return <div> Actual data {ctx?.read()}</div>;
};

export default Child;

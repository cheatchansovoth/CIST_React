const express = require("express");

const app = express();

app.get("/", (res, req) => {
  console.log("Listenning at port 3001");
});
app.listen(300, () => {
  console.log("Listenning at port 3001");
});

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

app.use(morgan("common"));
app.use(helmet());

const PORT = process.env.PORT || 8787;

app.listen(PORT, () => {
  console.log("server listening at port: " + PORT);
});

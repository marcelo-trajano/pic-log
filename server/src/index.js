const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const middleware = require("./middleware");
const LogEntry = require("./models/LogEntry");
const logsRouter = require("./api/logs");

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

app.use(morgan("common"));
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.get("/", async (req, res, next) => {});

app.use("/api/logs", logsRouter);

app.use(middleware.notFound);

app.use(middleware.errorHandler);

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => {
  console.log("server listening at port: " + PORT);
});

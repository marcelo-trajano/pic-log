const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const middleware = require("./middleware");
const LogEntry = require("./models/LogEntry");
const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

app.use(morgan("common"));
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.get("/", (req, res) => {
  LogEntry.create({
    title: "I am here",
    description: "this place is good",
    comments: "heello",
    image: "www.imag.com",
    rating: 4,
    latitude: 25.5,
    longetude: 22.2,
    visitDate: Date.now(),
  });

  res.json({ message: "access denied!" });
});

app.get("/:id", (req, res) => {
  console.log(req.params.id);

  //const id = ;

  //const data = LogEntry.findById(id).exec();

  res.json({});
});

app.get("/logs", async (req, res) => {
  console.log(req);
  const data = await LogEntry.find();

  res.json(data);
});

app.use(middleware.notFound);

app.use(middleware.errorHandler);

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => {
  console.log("server listening at port: " + PORT);
});

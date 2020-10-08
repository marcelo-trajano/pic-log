const { Router } = require("express");
const LogEntry = require("../models/LogEntry");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const entries = await LogEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res) => {
  const log = await LogEntry.findById({ _id: req.params.id });

  res.json(log);
});

router.post("/", async (req, res, next) => {
  try {
    let newLogEntry = new LogEntry(req.body);
    newLogEntry.visitDate = Date.now();
    console.log(newLogEntry);
    newLogEntry = await LogEntry.create(newLogEntry);
    res.json(newLogEntry);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  console.log(req.body);

  try {
    let log = {
      _id: req.body._id,
    };
    log = await LogEntry.save(log);
    console.log(log);
    res.json(log);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteditem = await LogEntry.deleteOne({ _id: req.params.id });

    if (deleteditem.deletedCount > 0) {
      res.json({ message: `item: ${req.params.id} deleted successifully!` });
    }

    res.json({ message: `item: ${req.params.id} not found!` });
  } catch (error) {
    res.status(422);
    next(error);
  }
});

module.exports = router;

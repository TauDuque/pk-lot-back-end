const express = require("express");
const Gains = require("./models/Gains");
const Veiculos = require("./models/Veiculos");

const gain = require("./controllers/gainscontroller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Working...");
});

router.get("/gains", (req, res) => {
  gain.getAllGain(req, res);
});

router.get("/gains/:id", (req, res) => {
  gain.getGainId(req, res);
});

router.post("/gains", (req, res) => {
  gain.postGain(req, res);
});

router.put("/gains", (req, res) => {
  gain.updateGain(req, res);
});

router.delete("/gains/:id", (req, res) => {
  gain.deleteGain(req, res);
});

module.exports = router;

const express = require("express");

const gain = require("./controllers/gainscontroller");
const vehicle = require("./controllers/vehiclescontroller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Working...");
});
//rotas tabela gains
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

//rotas tabela vehicles
router.get("/vehicles", (req, res) => {
  vehicle.getAllVehicles(req, res);
});

router.get("/vehicles/:id", (req, res) => {
  vehicle.getVehicleId(req, res);
});

router.post("/vehicles", (req, res) => {
  vehicle.postVehicle(req, res);
});

router.put("/vehicles", (req, res) => {
  vehicle.updateVehicle(req, res);
});

router.delete("/vehicles/:id", (req, res) => {
  vehicle.deleteVehicle(req, res);
});

module.exports = router;

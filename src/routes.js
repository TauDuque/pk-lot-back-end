const express = require("express");
const Gains = require("./models/Gains");
const Veiculos = require("./models/Veiculos");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Working...");
});

router.get("/gains", async (req, res) => {
  try {
    const data = await Gains.findAll();
    return res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Houve um erro na requisição..." });
  }
});

router.get("/gains/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Gains.findAll({ where: { id: id } });
    return res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Houve um erro na requisição..." });
  }
});

router.post("/gains", async (req, res) => {
  try {
    const { veiculos, valor, vagas_livres } = req.body;
    const data = await Gains.create({
      veiculos,
      valor,
      vagas_livres,
    });
    return res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Houve um erro durante o cadastro..." });
  }
});

module.exports = router;

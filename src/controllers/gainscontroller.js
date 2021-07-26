const express = require("express");
const Gains = require("../models/Gains");

const getAllGain = (req, res) => {
  console.log(res);
  const data = Gains.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};

const getGainId = (req, res) => {
  const { id } = req.params;
  const data = Gains.findAll({ where: { id: id } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(500).json("Houve um erro na requisição..."));
};

const postGain = (req, res) => {
  const { veiculos, valor, vagas_livres, dia } = req.body;
  const data = Gains.create({ veiculos, valor, vagas_livres, dia })
    .then((data) => {
      res.json(data);
    })
    .catch((err) =>
      res.status(500).json("Houve um erro durante o cadastro...")
    );
};

const updateGain = (req, res) => {
  const { id, veiculos, valor, vagas_livres } = req.body;
  const data = Gains.update(
    { veiculos, valor, vagas_livres },
    { where: { id: id } }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) =>
      res.status(500).json("Houve um erro durante a atualização...")
    );
};

const deleteGain = (req, res) => {
  const { id } = req.params;
  const data = Gains.destroy({ where: { id: id } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(500).json("Houve um erro..."));
};

module.exports = {
  getGainId: getGainId,
  getAllGain: getAllGain,
  postGain: postGain,
  updateGain: updateGain,
  deleteGain: deleteGain,
};

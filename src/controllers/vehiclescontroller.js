const express = require("express");
const Vehicles = require("../models/Vehicles");

const getAllVehicles = (req, res) => {
  const data = Vehicles.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(500).json("Houve um erro na requisição..."));
};

const getVehicleId = (req, res) => {
  const { id } = req.params;
  const data = Vehicles.findAll({ where: { id: id } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(500).json("Houve um erro na requisição..."));
};

const postVehicle = (req, res) => {
  const { nome, id_num, phone, type, time, single_price } = req.body;
  const data = Vehicles.create({
    nome,
    id_num,
    phone,
    type,
    time,
    single_price,
  })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

const updateVehicle = (req, res) => {
  const { id, nome, id_num, phone, type, time, single_price } = req.body;
  const data = Vehicles.update(
    { nome, id_num, phone, type, time, single_price },
    {
      where: { id: id },
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getAllVehicles: getAllVehicles,
  getVehicleId: getVehicleId,
  postVehicle: postVehicle,
  updateVehicle: updateVehicle,
};

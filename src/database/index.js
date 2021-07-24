const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Gains = require("../models/Gains");
const Veiculos = require("../models/Veiculos");

const connection = new Sequelize(dbConfig);

Gains.init(connection);
Veiculos.init(connection);

module.exports = connection;

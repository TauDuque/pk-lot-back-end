const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Gains = require("../models/Gains");
const Vehicles = require("../models/Vehicles");

const connection = new Sequelize(dbConfig);

Gains.init(connection);
Vehicles.init(connection);

module.exports = connection;

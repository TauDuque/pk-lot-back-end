const { Model, DataTypes } = require("sequelize");

class Veiculos extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        idNum: DataTypes.INTEGER,
        phone: DataTypes.INTEGER,
        type: DataTypes.STRING,
        time: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Veiculos;

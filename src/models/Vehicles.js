const { Model, DataTypes } = require("sequelize");

class Vehicles extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        idNum: DataTypes.INTEGER,
        phone: DataTypes.INTEGER,
        type: DataTypes.STRING,
        time: DataTypes.INTEGER,
        singlePrice: DataTypes.DECIMAL(10, 2),
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Vehicles;

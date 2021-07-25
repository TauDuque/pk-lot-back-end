const { Model, DataTypes } = require("sequelize");

class Vehicles extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        id_num: DataTypes.STRING(12),
        phone: DataTypes.STRING(12),
        type: DataTypes.STRING,
        time: DataTypes.STRING(12),
        single_price: DataTypes.DECIMAL(5, 2),
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Vehicles;

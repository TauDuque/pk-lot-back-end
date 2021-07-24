const { Model, DataTypes } = require("sequelize");

class Gains extends Model {
  static init(sequelize) {
    super.init(
      {
        veiculos: DataTypes.INTEGER,
        valor: DataTypes.DECIMAL(10, 2),
        vagas_livres: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Gains;

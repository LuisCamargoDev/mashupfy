/* USER MODEL FILE */
import { Model, Sequelize } from "sequelize";

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        email: Sequelize.STRING,
        file_img: Sequelize.STRING,
      },
      {
        sequelize
      }
    );
    return this;
  }
}

export default Company;

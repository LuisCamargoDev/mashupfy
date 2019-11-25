/* USER MODEL FILE */
import { Model, Sequelize } from "sequelize";

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: Sequelize.STRING,
        id_product_company: Sequelize.STRING,
        nome: Sequelize.STRING,
        valor: Sequelize.DOUBLE,
        porcentagem: Sequelize.DOUBLE,
        file_img: Sequelize.STRING,
      },
      {
        sequelize
      }
    );
    return this;
  }
}

export default Product;

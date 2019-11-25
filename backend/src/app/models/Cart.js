
import { Model, Sequelize } from "sequelize";


class Cart extends Model {
  static init(sequelize) {
    super.init(
      {
        id_hash: Sequelize.STRING,
        id_user: Sequelize.STRING,
        id_product: Sequelize.STRING,
        valor: Sequelize.FLOAT,
      },
      {
        sequelize
      }
    ); 
    return this;
  }
}

export default Cart;

/* USER MODEL FILE */
  import { Model, Sequelize } from "sequelize";
  import bcrypt from "bcryptjs";

  class User extends Model {
    static init(sequelize) {
      super.init(
        {
          nome: Sequelize.STRING,
          cpf: Sequelize.STRING,
          email: Sequelize.STRING,
          telefone: Sequelize.STRING,
          saldo: Sequelize.INTEGER,          
          password: Sequelize.VIRTUAL,
          password_hash: Sequelize.STRING
        },
        {
          sequelize
        }
      );
      this.addHook("beforeSave", async user => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8);
        }
      });

      return this;
    }

    checkPassword(password) {
      return bcrypt.compare(password, this.password_hash);
    }
  }

export default User;

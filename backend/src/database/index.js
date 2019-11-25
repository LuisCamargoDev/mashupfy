/*  DATABASE CONNECTION FILE */
  import Sequelize from "sequelize";
  import databaseConfig from "../config/database";

  import User from "../app/models/User";
  import Company from "../app/models/Company";
  import Product from "../app/models/Product";
  import Cart from "../app/models/Cart";

  const models = [User, Company, Product, Cart];

  class Database {
    constructor() {
      this.init();
    }
    // Realiza a conexao e Carrega os models
    init() {
      this.connection = new Sequelize(databaseConfig);
      models.map(model => model.init(this.connection));
    }
  }

export default new Database();

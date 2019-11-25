/* USER CONTROLLER FILE */
import * as Yup from "yup";
import User from "../models/User";

class UserController {
  /* Create a User */
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      cpf: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      telefone: Yup.string().required(),
      saldo: Yup.number()
      .required()
      .positive(),
      password: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Error Input Validation!" });
    }
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ error: "User already exist!" });
    }

    const { id, email, cpf } = await User.create(req.body);
    return res.json({
      id,
      email,
      cpf
    });
  }

  /* List One Users */
  async index(req, res) {
    const user = await User.findByPk(req.userId);
    res.json({
      data: user
    });
  }

  /* List all Users */
  async show(req, res) {
    const users = await User.findAll();
    res.json({
      data: users
    });
  }

  /* Edit a User */
  async updateValue(req, res) {
    const user = await User.findByPk(req.userId);
    const{ saldo } = req.body;
    res.json({
      saldo
    })
  }

  /* Delete a User */
  async delete(req, res) {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res
        .status(401)
        .json({ error: "Doesnt exist any with this email" });
    } else {
      return User.destroy({ where: { email } })
        ? res.json("User deleted!")
        : res.status(401).json({ error: "User couldnt be deleted!" });
    }
  }

  async value(req, res) {
    const user = await User.findByPk(req.userId);
    const {saldo} = user;
    res.json({
      data:saldo
    });
  }

}

export default new UserController();

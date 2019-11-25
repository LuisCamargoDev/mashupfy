/* USER CONTROLLER FILE */
import * as Yup from "yup";
import Cart from "../models/Cart";

class CartController {

  async store(req, res) {
    const schema = Yup.object().shape({
      id_hash: Yup.string().required(),
      id_user: Yup.string().required(),
      id_product: Yup.string().required(),
      valor: Yup.string().required() 
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Error Input Validation!" });
    }
    const cartExists = await Cart.findOne({ where: { id_hash: req.body.id_hash } });
    if (cartExists) {
      return res.status(400).json({ error: "User already exist!" });
    }

    const { id_hash, id_user, id_product, valor } = await Cart.create(req.body);
    return res.json({
        id_hash, id_user, id_product, valor
    });
  }

  async show(req, res) {
    const cart = await Cart.findAll();
    res.json({
      data: cart
    });
  }
}

export default new CartController();

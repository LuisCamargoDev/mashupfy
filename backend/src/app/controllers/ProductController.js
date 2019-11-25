/* USER CONTROLLER FILE */
import * as Yup from "yup";
import Product from "../models/Product";

class ProductController {

  async store(req, res) {
    const schema = Yup.object().shape({
        codigo: Yup.string().required(),
        id_product_company: Yup.string().required(),
        nome: Yup.string().required(),
        valor: Yup.string().required(),
        porcentagem: Yup.string().required(),
      file_img: Yup.string().required() 
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Error Input Validation!" });
    }
    const productExists = await Product.findOne({ where: { codigo: req.body.codigo } });
    if (productExists) {
      return res.status(400).json({ error: "User already exist!" });
    }

    const {codigo, id_product_company, nome,valor} = await Product.create(req.body);
    
    return res.json({
      codigo,
      id_product_company,
      nome,
      valor
    });
  }

  async show(req, res) {
    const product = await Product.findAll();
    res.json({
      data: product
    });
  }
}

export default new ProductController();

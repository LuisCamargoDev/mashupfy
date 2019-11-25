/* USER CONTROLLER FILE */
import * as Yup from "yup";
import Company from "../models/Company";

class CompanyController {

  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      cnpj: Yup.string().required(),
      email: Yup.string().email().required(),
      file_img: Yup.string().required() 
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Error Input Validation!" });
    }
    const companyExists = await Company.findOne({ where: { email: req.body.email } });
    if (companyExists) {
      return res.status(400).json({ error: "User already exist!" });
    }

    const { id, email, cnpj } = await Company.create(req.body);
    return res.json({
      id,
      email,
      cnpj
    });
  }

  async show(req, res) {
    const company = await Company.findAll();
    res.json({
      data: company
    });
  }
}

export default new CompanyController();

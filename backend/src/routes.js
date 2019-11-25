/* ROUTES CONFIGURATION FILE */
import { Router } from "express";

/* CONTROLLERS */
import UserController from "./app/controllers/UserController";
import CartController from "./app/controllers/CartController";
import CompanyController from "./app/controllers/CompanyController";
import ProductController from "./app/controllers/ProductController";
import SessionController from "./app/controllers/SessionController";

/* MIDDLEWARES */
import authStateData from "./app/middlewares/authStateData";

/* ROUTES*/
const routes = new Router();

routes.get("/company", authStateData, CompanyController.show);
routes.post("/company", authStateData, CompanyController.store);

routes.get("/product", authStateData, ProductController.show);
routes.post("/product", authStateData, ProductController.store);

routes.get("/cart", authStateData, CartController.show);
routes.post("/cart", authStateData, CartController.store);

routes.post("/login", SessionController.store);

routes.get("/users", UserController.show);
routes.post("/users", UserController.store);
routes.get("/users/update", authStateData,UserController.updateValue);
routes.get("/users/value", authStateData,UserController.value);
routes.get("/users/actual", authStateData,UserController.index);




export default routes;
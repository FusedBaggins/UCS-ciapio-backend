import { Router } from "express";
import unidadeFederativaControler from "./unidade-federativa/unidade-federativa.controler";


const routes = Router();
routes.get('/unidade-federativa/', unidadeFederativaControler.list);
routes.get('/unidade-federativa/id', unidadeFederativaControler.detail);

export default routes;
import { Router } from "express";

import cidadeControler from "./cidade/cidade.controler";
import unidadeFederativaControler from "./unidade-federativa/unidade-federativa.controler";

const routes = Router();
routes.get('/unidade-federativa/', unidadeFederativaControler.list);
routes.get('/unidade-federativa/id', unidadeFederativaControler.detail);
routes.get('/cidade/', cidadeControler.list);
routes.get('/cidade/id', cidadeControler.detail);

export default routes;
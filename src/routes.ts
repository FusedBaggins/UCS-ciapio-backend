import { Router } from "express";

import cidadeControler from "./cidade/cidade.controller";
import unidadeFederativaController from './unidade-federativa/unidade-federativa.controller';

const routes = Router();
routes.get('/unidade-federativa/', unidadeFederativaController.list);
routes.get('/unidade-federativa/id', unidadeFederativaController.detail);
routes.get('/cidade/', cidadeControler.list);
routes.get('/cidade/id', cidadeControler.detail);

export default routes;
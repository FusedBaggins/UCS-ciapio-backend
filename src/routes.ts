import { Router } from "express";

import cidadeControler from "./entidades/cidade/cidade.controller";
import enderecoController from "./entidades/endereco/endereco.controller";
import unidadeFederativaController from './entidades/unidade-federativa/unidade-federativa.controller';

const routes = Router();
routes.get('/unidade-federativa/', unidadeFederativaController.list);
routes.get('/unidade-federativa/:id', unidadeFederativaController.detail);
routes.get('/cidade/', cidadeControler.list);
routes.get('/cidade/:id', cidadeControler.detail);
routes.get('/cidade/', enderecoController.list);
routes.get('/cidade/:id', enderecoController.detail);

export default routes;
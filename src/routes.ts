import { Router } from "express";

import varaController from "./entidades/vara/vara.controller";
import cidadeControler from "./entidades/cidade/cidade.controller";
import usuarioController from "./entidades/usuario/usuario.controller";
import enderecoController from "./entidades/endereco/endereco.controller";
import perguntaController from "./entidades/pergunta/pergunta.controller";
import processoController from "./entidades/processo/processo.controller";
import instituicaoController from "./entidades/instituicao/instituicao.controller";
import unidadeFederativaController from './entidades/unidade-federativa/unidade-federativa.controller';
import respostaController from "./entidades/resposta/resposta.controller";

const routes = Router();

routes.get('/unidade-federativa/', unidadeFederativaController.list);
routes.get('/unidade-federativa/:id', unidadeFederativaController.detail);
routes.get('/cidade/', cidadeControler.list);
routes.get('/cidade/:id', cidadeControler.detail);
routes.get('/endereco/', enderecoController.list);
routes.get('/endereco/:id', enderecoController.detail);
routes.get('/instituicao/', instituicaoController.list);
routes.get('/instituicao/:id', instituicaoController.detail);
routes.get('/usuario/', usuarioController.list);
routes.get('/usuario/:id', usuarioController.detail);
routes.get('/vara/', varaController.list);
routes.get('/vara/:id', varaController.detail);
routes.get('/pergunta/', perguntaController.list);
routes.get('/pergunta/:id', perguntaController.detail);
routes.get('/resposta/', respostaController.list);
routes.get('/resposta/:id', respostaController.detail);
routes.get('/processo/', processoController.list);
routes.get('/processo/:id', processoController.detail);

export default routes;
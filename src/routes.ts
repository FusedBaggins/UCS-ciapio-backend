import { Router, response } from "express";

import varaController from "./entidades/vara/vara.controller";
import usuarioController from "./entidades/usuario/usuario.controller";
import enderecoController from "./entidades/endereco/endereco.controller";
import processoController from "./entidades/processo/processo.controller";
import instituicaoController from "./entidades/instituicao/instituicao.controller";
import perguntaController from "./entidades/prestador/entidades/pergunta/pergunta.controller";
import respostaController from "./entidades/prestador/entidades/resposta/resposta.controller";
import unidadeFederativaController from './entidades/unidade-federativa/unidade-federativa.controller';
import alternativaPenalController from './entidades/prestador/entidades/alternativa-penal/alternativa-penal.controller';
import MenuService from "./services/menuService";
import passport from "passport";
import { Response, Request } from "express";
import { AuthenticatedRequest } from "..";
import prestadorController from "./entidades/prestador/prestador.controller";
import visitaController from "./entidades/visita/visita.controller";
import cidadeController from "./entidades/cidade/cidade.controller";

const routes = Router();

routes.get('/unidade-federativa/', unidadeFederativaController.list);

routes.get('/unidade-federativa/:id', unidadeFederativaController.detail);

routes.get('/cidade/', cidadeController.list);

routes.get('/cidade/:id', cidadeController.detail);

routes.get('/endereco/', enderecoController.list);

routes.get('/endereco/:id', enderecoController.detail);

routes.get('/vara/', varaController.list);

routes.get('/vara/:id', varaController.detail);

routes.get('/pergunta/', perguntaController.list);

routes.get('/pergunta/:id', (req: Request, res: Response) =>
  perguntaController.detail(req as AuthenticatedRequest, res));

routes.post('/pergunta/', (req: Request, res: Response) =>
  perguntaController.save(req as AuthenticatedRequest, res));

routes.get('/resposta/', respostaController.list);

routes.get('/resposta/:id', respostaController.detail);

routes.get('/processo/', processoController.list);

routes.get('/processo/:id', processoController.detail);

routes.get('/select/prestador/', (req: Request, res: Response) =>
  prestadorController.listSelect(req as AuthenticatedRequest, res));

routes.get('/select/instituicao-parceira/', (req: Request, res: Response) =>
  instituicaoController.listSelect(req as AuthenticatedRequest, res));

routes.get('/select/cidade/', (req: Request, res: Response) =>
  cidadeController.listSelect(req as AuthenticatedRequest, res));

routes.get('/prestador/', (req: Request, res: Response) =>
  prestadorController.list(req as AuthenticatedRequest, res));

routes.get('/prestador/:id', (req: Request, res: Response) =>
  prestadorController.detail(req as AuthenticatedRequest, res));

routes.post('/prestador/', (req: Request, res: Response) =>
  prestadorController.save(req as AuthenticatedRequest, res));

routes.get('/ciap/', instituicaoController.listCIAP);

routes.get('/ciap/:id', (req: Request, res: Response) =>
  instituicaoController.detail(req as AuthenticatedRequest, res));

routes.post('/ciap/', (req: Request, res: Response) =>
  instituicaoController.save(req as AuthenticatedRequest, res));

routes.get('/instituicao-parceira/', (req: Request, res: Response) =>
  instituicaoController.listInstituicaoParceira(req as AuthenticatedRequest, res));

routes.get('/instituicao-parceira/:id', (req: Request, res: Response) =>
  instituicaoController.detail(req as AuthenticatedRequest, res));

routes.post('/instituicao-parceira/', (req: Request, res: Response) =>
  instituicaoController.save(req as AuthenticatedRequest, res));

routes.get('/usuario/', (req: Request, res: Response) =>
  usuarioController.list(req as AuthenticatedRequest, res));

routes.get('/usuario/:id', usuarioController.detail);

routes.post('/usuario/', (req: Request, res: Response) =>
  usuarioController.save(req as AuthenticatedRequest, res));

routes.get('/visita/', (req: Request, res: Response) =>
  visitaController.list(req as AuthenticatedRequest, res));

routes.get('/visita/:id', (req: Request, res: Response) =>
  visitaController.detail(req as AuthenticatedRequest, res));

routes.post('/visita/', (req: Request, res: Response) =>
  visitaController.save(req as AuthenticatedRequest, res));

routes.get('/menu/', (req: Request, res: Response) =>
  MenuService.getMenu(req as AuthenticatedRequest, res));

routes.get('/login/', (req: Request, res: Response) => {
  res.json({ mensagem: 'Você foi redirecionado para página de login (alterar este redirect)' }).status(200);
});

routes.post('/unauthorized/', (req: Request, res: Response) => {
  const mensagem = req.flash('error');
  res.status(401).json({ mensagem });
});

routes.post(
  "/login",
  passport.authenticate("local"),
  (req: Request, res: Response) => res.status(200).send()

);

routes.get('/alternativa-penal/', (req: Request, res: Response) =>
alternativaPenalController.list(req as AuthenticatedRequest, res));

export default routes;
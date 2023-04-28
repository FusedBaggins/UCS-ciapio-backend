import { Router, response } from "express";

import varaController from "./entidades/vara/vara.controller";
import cidadeControler from "./entidades/cidade/cidade.controller";
import usuarioController from "./entidades/usuario/usuario.controller";
import enderecoController from "./entidades/endereco/endereco.controller";
import processoController from "./entidades/processo/processo.controller";
import instituicaoController from "./entidades/instituicao/instituicao.controller";
import perguntaController from "./entidades/prestador/entidades/pergunta/pergunta.controller";
import respostaController from "./entidades/prestador/entidades/resposta/resposta.controller";
import unidadeFederativaController from './entidades/unidade-federativa/unidade-federativa.controller';
import Menu from "./helpers/functional/menu";
import passport from "passport";
import { Response, Request } from "express";
import { AuthenticatedRequest } from "..";

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

routes.get('/menu', (req: Request, res: Response) =>
  Menu.getMenu(req as AuthenticatedRequest, res));

routes.post('/', (req: Request, res: Response) => {
  res.sendStatus(200);
});

routes.get('/login', (req: Request, res: Response) => {
  res.send('Você foi redirecionado para página de login (alterar este redirect)').status(200);
});

routes.post('/unauthorized', (req: Request, res: Response) => {
  const mensagem = req.flash('error');
  res.status(401).send({ mensagem });
});

routes.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/unauthorized",
    failureFlash: true,
    session: true,
  })
);


export default routes;
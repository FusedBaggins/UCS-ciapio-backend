
import http from 'http';
import cors from 'cors';
import express from "express";
import bodyParser from 'body-parser';

import routes from './routes';
import Vara from './entidades/vara/vara.model';
import Droga from './entidades/droga/droga.model';
import Cidade from './entidades/cidade/cidade.model';
import Usuario from './entidades/usuario/usuario.model';
import Pergunta from './entidades/pergunta/pergunta.model';
import Endereco from './entidades/endereco/endereco.model';
import Processo from './entidades/processo/processo.model';
import Resposta from './entidades/resposta/resposta.model';
import Prestador from './entidades/prestador/prestador.model';
import Deficiencia from './entidades/deficiencia/deficiencia.model';
import Instituicao from './entidades/instituicao/instituicao.model';
import UnidadeFederativa from './entidades/unidade-federativa/unidade-federativa.model';
import { FichaMedica } from './entidades/ficha-medica/ficha-medica.model';
import PerfilPermissaoUsuario from './entidades/perfil-permissao-usuario/perfil-permissao-usuario.model';
import acl from 'express-acl';
import authenticate from './middlewares/authenticate';
import expressSession from "express-session";
import Perfil from './enums/perfil';
import AgendamentoPrestacao from './entidades/agendamento-prestacao/agendamento-prestacao.model';
import Visita from './entidades/visita/visita.model';
class Application {
    server: http.Server;
    express: express.Application;

    constructor() {
        this.express = express();
        this.server = http.createServer(this.express);

        this._setSession();
        this._setAclExpress();
        this._setMiddlewares();
        this._setRoutes();
        this._syncDatabase();
    }

    private _setMiddlewares(): void {
        this.express.use(cors({
            origin: ['http://localhost:4200'],
        }));
        this.express.use(express.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(authenticate);
        this.express.use(acl.authorize);
    }

    private _setRoutes(): void {
        this.express.use(routes);
    }

    private _setSession(): void{
        this.express.use(expressSession({
            secret: 'secretJorge',
            resave: false,
            saveUninitialized: false,
        }));
    }

    private _setAclExpress(): void {
        acl.config({
            baseUrl: '/',
            decodedObjectName: 'user',
            roleSearchPath: 'session.user.role',
            defaultRole: Perfil.UsuarioEntidade,
        });
    }

    private _syncDatabase(): void {
        UnidadeFederativa.sync({ alter: true });
        Cidade.sync({ alter: true });
        Endereco.sync({ alter: true });
        Usuario.sync({ alter: true });
        Instituicao.sync({ alter: true });

        Vara.sync({ alter: true });
        Processo.sync({ alter: true });

        Prestador.sync({ alter: true });
        PerfilPermissaoUsuario.sync({ alter: true });
        FichaMedica.sync({ alter: true });
        Droga.sync({ alter: true });
        Deficiencia.sync({ alter: true });
        Pergunta.sync({ alter: true });
        Resposta.sync({ alter: true });
        AgendamentoPrestacao.sync({ alter: true });
        Visita.sync({ alter: true });
    }
}

export default new Application().server;
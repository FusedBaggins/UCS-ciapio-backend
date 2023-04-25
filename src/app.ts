
import http from 'http';
import cors from 'cors';
import express from "express";
import acl from 'express-acl';
import bodyParser from 'body-parser';

import routes from './routes';
import Perfil from './enums/perfil';
import expressSession from "express-session";
import { databaseSync } from './database/sync';
import authenticate from './middlewares/authenticate';
import aclRules from '../acl-rules';

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
        databaseSync();
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

    private _setSession(): void {
        this.express.use(expressSession({
            secret: 'secretJorge',
            resave: false,
            saveUninitialized: false,
        }));
    }

    private _setAclExpress(): void {
        acl.config({
            rules: aclRules,
            baseUrl: '/',
            decodedObjectName: 'user',
            roleSearchPath: 'session.user.role',
            defaultRole: Perfil.UsuarioEntidade,
        });
    }


}

export default new Application().server;

import http from 'http';
import cors from 'cors';
import express from "express";
import bodyParser from 'body-parser';

import routes from './routes';
import Droga from './entidades/droga/droga.model';
import Cidade from './entidades/cidade/cidade.model';
import Endereco from './entidades/endereco/endereco.model';
import UnidadeFederativa from './entidades/unidade-federativa/unidade-federativa.model';
import Deficiencia from './entidades/deficiencia/deficiencia.model';

class Application {
    server: http.Server;
    express: express.Application;

    constructor() {
        this.express = express();
        this.server = http.createServer(this.express);

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
    }

    private _setRoutes(): void {
        this.express.use(routes);
    }

    private _syncDatabase(): void {
        UnidadeFederativa.sync({ alter: true });
        Cidade.sync({ alter: true });
        Endereco.sync({ alter: true });
        Droga.sync({ alter: true });
        Deficiencia.sync({ alter: true });
    }
}

export default new Application().server;
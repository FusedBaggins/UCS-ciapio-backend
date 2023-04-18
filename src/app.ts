
import http from 'http';
import cors from 'cors';
import express from "express";
import bodyParser from 'body-parser';

import routes from './routes';
import Cidade from './cidade/cidade.model';
import UnidadeFederativa from './unidade-federativa/unidade-federativa.model';

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
    }
}

export default new Application().server;
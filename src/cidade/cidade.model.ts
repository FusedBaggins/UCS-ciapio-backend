import Sequelize, { Model } from 'sequelize';

import database from '../database/database';
import UnidadeFederativa from '../unidade-federativa/unidade-federativa.model';

class Cidade extends Model {
    id!: number;
    nome!: string;
    unidadeFederativa!: UnidadeFederativa;
}

Cidade.init(
    {
        nome: { type: Sequelize.STRING, allowNull: false }
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'cidade'
    }
);

export default Cidade;
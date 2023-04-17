import Sequelize, { Model } from 'sequelize';
import database from '../database/database';

class UnidadeFederativa extends Model {
    id!: number;
    nome!: string;
    sigla!: string;
}

UnidadeFederativa.init(
    {
        nome: { type: Sequelize.STRING },
        sigla: { type: Sequelize.STRING }
    },
    {
        tableName: 'unidade_federativa',
        sequelize: database.connection,
        freezeTableName: true
    }
);

export default UnidadeFederativa;
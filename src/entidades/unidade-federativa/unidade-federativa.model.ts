import Sequelize, { Model } from 'sequelize';
import database from '../../database/database';
import Cidade from '../cidade/cidade.model';


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
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'unidade_federativa',
    }
);

Cidade.belongsTo(UnidadeFederativa, {
    foreignKey:'unidadeFederativaId',
    as: 'unidadeFederativa'
});

export default UnidadeFederativa;
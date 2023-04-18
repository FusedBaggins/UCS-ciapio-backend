import Sequelize, { Model } from 'sequelize';

import database from '../../database/database';
import UnidadeFederativa from '../unidade-federativa/unidade-federativa.model';
import Endereco from '../endereco/endereco.model';

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

Endereco.belongsTo(Cidade, {
    foreignKey:'cidadeId',
    as: 'cidade'
});

export default Cidade;
import Sequelize, { Model } from 'sequelize';

import database from '../../database/database';
import Cidade from '../cidade/cidade.model';
import Instituicao from '../instituicao/instituicao.model';


class Endereco extends Model {
    id!: number;
    cep!: number;
    rua!: string;
    numero!: number;
    bairro!: string;
    complemento!: string;
    cidade!: Cidade
}

Endereco.init(
    {
        cep: { type: Sequelize.BIGINT },
        rua: { type: Sequelize.STRING },
        numero: { type: Sequelize.BIGINT },
        bairro: { type: Sequelize.STRING },
        complemento: { type: Sequelize.STRING },
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'endereco',
    }
);

Instituicao.belongsTo(Endereco, {
    foreignKey:'enderecoId',
    as: 'endereco'
});

export default Endereco;
import Sequelize, { Model } from 'sequelize';

import database from '../../database/database';
import Endereco from '../endereco/endereco.model';
import Usuario from '../usuario/usuario.model';
import Visita from '../visita/visita.model';
import AtestadoComparecimento from '../atestado-comparecimento/atestado-comparecimento.model';


class Instituicao extends Model {
    id!: number;
    nome!: string;
    cnpj!: string;
    email!: string;
    telefone1!: string;
    telefone2!: string;
    tipo_instituicao!: number;
    observacao!: string;
    data_credenciamento!: Date;
    data_descredenciamento!: Date;
    endereco!:Endereco;
}

Instituicao.init(
    {
        nome: { type: Sequelize.STRING, allowNull: false },
        cnpj: { type: Sequelize.STRING, allowNull: false },
        email: { type: Sequelize.STRING, allowNull: false },
        telefone1: { type: Sequelize.STRING, allowNull: false },
        telefone2: { type: Sequelize.STRING, allowNull: true },
        observacao: { type: Sequelize.STRING, allowNull: true },
        data_credenciamento: { type: Sequelize.DATE, allowNull: false },
        data_descredenciamento: { type: Sequelize.DATE, allowNull: true },
        tipo_instituicao: { type: Sequelize.INTEGER, allowNull: true },
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'instituicao',
    }
);

Usuario.belongsTo(Instituicao, {
    foreignKey:'instituicaoId',
    as: 'instituicao'
});

Instituicao.hasOne(Visita, {
    foreignKey:'instituicaoId',
    as: 'instituicao'
});

Instituicao.hasMany(AtestadoComparecimento, {
    foreignKey:'instituicaoId',
    as: 'instituicao'
});

export default Instituicao;
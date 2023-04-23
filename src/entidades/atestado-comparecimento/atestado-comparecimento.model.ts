import Sequelize, { Model } from 'sequelize';

import database from '../../database/database';
import Usuario from '../usuario/usuario.model';
import Processo from '../processo/processo.model';
import Instituicao from '../instituicao/instituicao.model';

export class AtestadoComparecimento extends Model {
    id!: number;
    observacoes!: string;
    usuarioAtendimento!: Usuario;
    processo!: Processo;
    instituicao!: Instituicao;
}

AtestadoComparecimento.init(
    {
        titulo: { type: Sequelize.STRING, allowNull: false },
        descricao: { type: Sequelize.STRING, allowNull: true },
        duracao: { type: Sequelize.STRING, allowNull: false }
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'atestado_comparecimento'
    }
);

export default AtestadoComparecimento;
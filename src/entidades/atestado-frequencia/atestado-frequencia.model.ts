import Sequelize, { Model } from 'sequelize';

import database from '../../database/database';
import Usuario from '../usuario/usuario.model';
import Processo from '../processo/processo.model';
import Instituicao from '../instituicao/instituicao.model';

export class AtestadoFrequencia extends Model {
    id!: number;
    dt_entrada!: Date;
    dt_saida!: Date;
    observacoes!: string;
    processo!: Processo;
}

AtestadoFrequencia.init(
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

export default AtestadoFrequencia;
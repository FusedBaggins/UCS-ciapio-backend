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
        dt_entrada: { type: Sequelize.DATE, allowNull: false },
        dt_saida: { type: Sequelize.DATE, allowNull: true },
        observacoes: { type: Sequelize.STRING, allowNull: false }
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'atestado_frequencia'
    }
);

export default AtestadoFrequencia;
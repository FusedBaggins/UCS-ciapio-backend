import Sequelize, { Model } from 'sequelize';

import database from '../../database/database';
import Usuario from '../usuario/usuario.model';
import Processo from '../processo/processo.model';
import Instituicao from '../instituicao/instituicao.model';

export class AtestadoFrequencia extends Model {
    id!: number;
    data_inicial!: Date;
    horario_inicio!: string;
    horario_fim!: string;
    observacoes!: string;
    processoId!: number;
}

AtestadoFrequencia.init(
    {
        data_inicial: { type: Sequelize.DATE, allowNull: false },
        horario_inicio: { type: Sequelize.STRING, allowNull: false },
        horario_fim: { type: Sequelize.STRING, allowNull: false },
        observacoes: { type: Sequelize.STRING, allowNull: true }
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'atestado_frequencia'
    }
);

export default AtestadoFrequencia;
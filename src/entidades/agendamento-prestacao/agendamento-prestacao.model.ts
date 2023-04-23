import Sequelize, { Model } from 'sequelize';

import Visita from '../visita/visita.model';
import database from '../../database/database';
import Usuario from '../usuario/usuario.model';
import Processo from '../processo/processo.model';

class AgendamentoPrestacao extends Model {

    id!: number;
    horario_inicio!: Date;
    horario_fim!: Date;
    data_inicial!: Date;
    segunda!: number;
    terca!: number;
    quarta!: number;
    quinta!: number;
    sexta!: number;
    sabado!: number;
    domingo!: number;
    dtaAlteracao!: Date;
    processo!: Processo;
    visita!: Visita;
    usuario!: Usuario;
}

AgendamentoPrestacao.init(
    {
        horario_inicio: { type: Sequelize.DATE, allowNull: false },
        horario_fim: { type: Sequelize.DATE, allowNull: false },
        data_inicial: { type: Sequelize.DATE, allowNull: false },
        segunda: { type: Sequelize.INTEGER, allowNull: false },
        terca: { type: Sequelize.INTEGER, allowNull: false },
        quarta: { type: Sequelize.INTEGER, allowNull: false },
        quinta: { type: Sequelize.INTEGER, allowNull: false },
        sexta: { type: Sequelize.INTEGER, allowNull: false },
        sabado: { type: Sequelize.INTEGER, allowNull: false },
        domingo: { type: Sequelize.INTEGER, allowNull: false },
        dtaAlteracao: { type: Sequelize.DATE, allowNull: false }
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'agendamento_prestacao'
    }
);

export default AgendamentoPrestacao;
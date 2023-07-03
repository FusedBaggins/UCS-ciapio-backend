import Sequelize, { Model } from 'sequelize';

import Visita from '../visita/visita.model';
import database from '../../database/database';
import Usuario from '../usuario/usuario.model';
import Processo from '../processo/processo.model';
import AtestadoFrequencia from '../atestado-frequencia/atestado-frequencia.model';

class AgendamentoPrestacao extends Model {

    id!: number;
    horario_inicio!: string;
    horario_fim!: string;
    data_inicial!: Date;
    segunda!: number;
    terca!: number;
    quarta!: number;
    quinta!: number;
    sexta!: number;
    sabado!: number;
    domingo!: number;
    processoId!: number;
    dtaAlteracao!: Date;
    processo!: Processo;
    visita!: Visita;
    usuario!: Usuario;
}

AgendamentoPrestacao.init(
    {
        horario_inicio: { type: Sequelize.STRING, allowNull: false },
        horario_fim: { type: Sequelize.STRING, allowNull: false },
        data_inicial: { type: Sequelize.DATE, allowNull: false },
        segunda: { type: Sequelize.BOOLEAN, allowNull: true },
        terca: { type: Sequelize.BOOLEAN, allowNull: true },
        quarta: { type: Sequelize.BOOLEAN, allowNull: true },
        quinta: { type: Sequelize.BOOLEAN, allowNull: true },
        sexta: { type: Sequelize.BOOLEAN, allowNull: true },
        sabado: { type: Sequelize.BOOLEAN, allowNull: true },
        domingo: { type: Sequelize.BOOLEAN, allowNull: true },
        dtaAlteracao: { type: Sequelize.DATE, allowNull: true }
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'agendamento_prestacao'
    }
);

AgendamentoPrestacao.hasMany(AtestadoFrequencia, {
    foreignKey: 'agendamentoId',
    as: 'frequencias',
});

AtestadoFrequencia.belongsTo(AgendamentoPrestacao, {
    foreignKey: 'agendamentoId',
    as: 'agendamentoPrestacao',
});


export default AgendamentoPrestacao;
import Sequelize, { Model } from 'sequelize';
import database from "../../database/database";
import Processo from '../processo/processo.model';
import Instituicao from '../instituicao/instituicao.model';
import Prestador from '../prestador/prestador.model';
import AgendamentoPrestacao from '../agendamento-prestacao/agendamento-prestacao.model';


export class Visita extends Model {
    id!: number;
    status!: boolean;
    observacao!: string;    
    motivoReprovacao!: string;
    prazoAceite!: Date;
    dataAceite!: Date;
    dataVisita!: Date;
    processo!: Processo;
    instituicao!: Instituicao;
    prestador!: Prestador;
}

Visita.init(
    {
        status: { type: Sequelize.BOOLEAN, allowNull: false },
        observacao: { type: Sequelize.STRING, allowNull: false },
        motivoReprovacao: { type: Sequelize.STRING, allowNull: false },
        prazoAceite: { type: Sequelize.DATE, allowNull: false },
        dataAceite: { type: Sequelize.DATE, allowNull: false },
        dataVisita: { type: Sequelize.DATE, allowNull: false },
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'visita'
    }
);

Visita.hasOne(AgendamentoPrestacao, {
    foreignKey:'agendamentoPrestacaoId',
    as: 'agendamentoPrestacao'
});



export default Visita;
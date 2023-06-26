
import Sequelize, { Model } from 'sequelize';

import Vara from "../vara/vara.model";
import database from "../../database/database";
import Prestador from "../prestador/prestador.model";
import Instituicao from "../instituicao/instituicao.model";
import AgendamentoPrestacao from '../agendamento-prestacao/agendamento-prestacao.model';
import Visita from '../visita/visita.model';
import AtestadoComparecimento from '../atestado-comparecimento/atestado-comparecimento.model';
import { AtestadoFrequencia } from '../atestado-frequencia/atestado-frequencia.model';

export class Processo extends Model {
    id!: number;
    nro_processo!: number;
    nro_artigo_penal!: number;
    pena_originaria!: string;
    pena_originaria_regime!: number;
    inciso!: string;
    detalhamento!: string;
    prd!: number;
    prd_descricao!: string;
    horas_cumprir!: number;
    qtd_penas_anteriores!: number;
    possui_multa!: boolean;
    valor_a_pagar!: number;
    prestador!: Prestador;
    instituicao!: Instituicao;
    vara!: Vara;
    descricao_alternativa_penal!:string;
}

Processo.init(
    {
        nro_processo: { type: Sequelize.BIGINT, allowNull: false },
        nro_artigo_penal: { type: Sequelize.BIGINT, allowNull: false },
        pena_originaria: { type: Sequelize.STRING, allowNull: false },
        pena_originaria_regime: { type: Sequelize.BIGINT, allowNull: false },
        inciso: { type: Sequelize.STRING, allowNull: false },
        detalhamento: { type: Sequelize.STRING, allowNull: false },
        prd: { type: Sequelize.BIGINT, allowNull: false },
        prd_descricao: { type: Sequelize.STRING, allowNull: false },
        horas_cumprir: { type: Sequelize.INTEGER, allowNull: false },
        possui_multa: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
        valor_a_pagar: { type: Sequelize.FLOAT, allowNull: true },
        descricao_alternativa_penal: { type: Sequelize.STRING, allowNull: true },
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'processo'
    }
);

Processo.hasOne(AgendamentoPrestacao, {
    foreignKey: 'processoId',
});

Processo.hasMany(Visita, {
    foreignKey: 'processoId',
});

Processo.hasMany(AtestadoComparecimento, {
    foreignKey: 'processoId',
});

Processo.hasMany(AtestadoFrequencia, {
    foreignKey: 'processoId',
    as: 'atestadosFrequencia'
});

export default Processo;
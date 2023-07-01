import Sequelize, { Model } from 'sequelize';

import database from '../../database/database';
import Usuario from '../usuario/usuario.model';
import Processo from '../processo/processo.model';
import Instituicao from '../instituicao/instituicao.model';
import Prestador from '../prestador/prestador.model';

export class AtestadoComparecimento extends Model {
    id!: number;
    prestadorId!: number;
    nome!: string;
    observacoes!: string;
    data!: Date;
    telefone!: string;
    usuarioAtendimento!: Usuario;
    prestador!: Prestador;
    instituicao!: Instituicao;
}

AtestadoComparecimento.init(
    {
        nome: { type: Sequelize.STRING, allowNull: true },
        observacoes: { type: Sequelize.STRING, allowNull: false },
        data: { type: Sequelize.STRING, allowNull: false },
        telefone: { type: Sequelize.STRING, allowNull: false }
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'atestado_comparecimento'
    }
);

export default AtestadoComparecimento;
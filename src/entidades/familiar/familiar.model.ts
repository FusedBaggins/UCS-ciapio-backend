import Sequelize, { Model } from 'sequelize';

import database from '../../database/database';
import Prestador from '../prestador/prestador.model';

export class Familiar extends Model {
    id!: number;
    nome!: string;
    parentesco!: string;
    idade!: number;
    profissao!: string;
    observacao!: string;
    telefone!: string;
    prestador!: Prestador;
}

Familiar.init(
    {
        nome: { type: Sequelize.STRING, allowNull: false },
        parentesco: { type: Sequelize.STRING, allowNull: true },
        idade: { type: Sequelize.INTEGER, allowNull: true },
        profissao: { type: Sequelize.STRING, allowNull: true },
        observacao: { type: Sequelize.STRING, allowNull: true },
        telefone: { type: Sequelize.STRING, allowNull: true },
        
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'familiar'
    }
);

export default Familiar;
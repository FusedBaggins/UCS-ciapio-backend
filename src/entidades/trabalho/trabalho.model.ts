import Sequelize, { Model } from 'sequelize';

import database from '../../database/database';
import Endereco from '../endereco/endereco.model';
import Prestador from '../prestador/prestador.model';

export class Trabalho extends Model {
    id!: number;
    descricao!: string;
    horario_inicio!: Date;
    horario_fim!: Date;
    segunda!: boolean;
    terca!: boolean;
    quarta!: boolean;
    quinta!: boolean;
    sexta!: boolean;
    sabado!: boolean;
    domingo!: boolean;
    observacao!: string
    endereco!: Endereco;
    prestador!: Prestador;
}

Trabalho.init(
    {
        descricao: { type: Sequelize.STRING, allowNull: true },
        horario_inicio: { type: Sequelize.TIME, allowNull: false },
        horario_fim: { type: Sequelize.TIME, allowNull: false },
        segunda: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: false },
        terca: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: false },
        quarta: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: false },
        quinta: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: false },
        sexta: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: false },
        sabado: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: false },
        domingo: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: false },
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'trabalho'
    }
);
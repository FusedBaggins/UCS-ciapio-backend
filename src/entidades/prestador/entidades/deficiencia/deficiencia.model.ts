import Sequelize, { Model } from 'sequelize';

import database from '../../../../database/database';


class Deficiencia extends Model {
    id!: number;
    nome!: string;
}

Deficiencia.init(
    {
        nome: { type: Sequelize.STRING },
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'deficiencia',
    }
);

export default Deficiencia;
import Sequelize, { Model } from 'sequelize';

import database from '../../../../database/database';


class Deficiencia extends Model {
    id!: number;
    idDeficiencia!: number;
}

Deficiencia.init(
    {
        idDeficiencia: { type: Sequelize.INTEGER },
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'deficiencia',
    }
);

export default Deficiencia;
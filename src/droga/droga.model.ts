import Sequelize, { Model } from 'sequelize';
import database from '../database/database';


class Droga extends Model {
    id!: number;
    nome!: string;
}

Droga.init(
    {
        nome: { type: Sequelize.STRING },
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'droga',
    }
);

export default Droga;
import Sequelize, { Model } from 'sequelize';
import database from "../../database/database";


export class Vara extends Model {
    id!: number;
    nome!: string;
}

Vara.init(
    {
        nome: { type: Sequelize.STRING, allowNull: false }
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'vara'
    }
);

export default Vara;
import Sequelize, { Model } from 'sequelize';
import database from "../../database/database";
import Processo from '../processo/processo.model';


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

Processo.belongsTo(Vara, {
    foreignKey: 'varaId',
    as: 'vara'
});

export default Vara;
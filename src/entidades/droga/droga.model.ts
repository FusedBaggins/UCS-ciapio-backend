import Sequelize, { Model } from 'sequelize';
import database from '../../database/database';
import UsoDroga from '../uso-droga/uso-droga.model';


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

UsoDroga.belongsTo(Droga, {
    foreignKey: 'drogaId',
    as: 'droga'
});

export default Droga;
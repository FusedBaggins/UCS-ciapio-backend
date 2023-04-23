import Sequelize, { Model } from 'sequelize';

import Prestador from '../../prestador.model';
import database from '../../../../database/database';


export class Beneficio extends Model {
    id!: number;
    nome!: string;
    prestador!: Prestador;
}

Beneficio.init(
    {
        nome: { type: Sequelize.STRING, allowNull: false }
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'beneficio'
    }
);

export default Beneficio;
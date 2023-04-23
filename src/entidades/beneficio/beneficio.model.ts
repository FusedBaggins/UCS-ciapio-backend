import Sequelize, { Model } from 'sequelize';

import database from '../../database/database';
import Prestador from '../prestador/prestador.model';

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
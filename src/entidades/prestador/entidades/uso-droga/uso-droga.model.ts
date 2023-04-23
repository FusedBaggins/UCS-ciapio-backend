import Sequelize, { DataTypes, Model } from 'sequelize';

import Droga from '../droga/droga.model';
import database from '../../../../database/database';
import FichaMedica from '../ficha-medica/ficha-medica.model';
import UsoDrogaFrequencia from '../../../../enums/uso-droga-frequencia';

export class UsoDroga extends Model {
    id!: number;
    observacao!: string;
    frequencia!: UsoDrogaFrequencia;
    fichaMedia!: FichaMedica;
    droga!: Droga;
}

UsoDroga.init(
    {
        observacao: { type: Sequelize.STRING, allowNull: true },
        frequencia: {
            type: DataTypes.INTEGER,
            validate: {
                isIn: [[...Object.values(UsoDrogaFrequencia)]],
            },
            allowNull: true,
        }
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'uso_droga'
    }
);

export default UsoDroga;
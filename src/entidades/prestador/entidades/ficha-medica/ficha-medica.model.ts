import Sequelize, { Model } from 'sequelize';

import Prestador from '../../prestador.model';
import UsoDroga from '../uso-droga/uso-droga.model';
import Deficiencia from '../deficiencia/deficiencia.model';
import database from '../../../../database/database';

export class FichaMedica extends Model {
    id!: number;
    descricao!: string;
    prestador!: Prestador;
}

FichaMedica.init(
    {
        descricao: { type: Sequelize.STRING, allowNull: true }
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'ficha_medica'
    }
);

UsoDroga.belongsTo(FichaMedica, {
    foreignKey: 'fichaMedicaId',
    as: 'fichaMedica'
});

Deficiencia.belongsTo(FichaMedica, {
    foreignKey: 'fichaMedicaId',
    as: 'fichaMedica'
});

export default FichaMedica;
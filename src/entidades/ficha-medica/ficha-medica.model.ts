import Sequelize, { Model } from 'sequelize';
import database from '../../database/database';
import Prestador from '../prestador/prestador.model';
import Deficiencia from '../deficiencia/deficiencia.model';
import UsoDroga from '../uso-droga/uso-droga.model';

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
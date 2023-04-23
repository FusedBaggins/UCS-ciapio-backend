import Sequelize, { Model } from 'sequelize';

import Prestador from '../../prestador.model';
import database from '../../../../database/database';


export class AlternativaPenal extends Model {
    id!: number;
    titulo!: string;
    descricao!: string;
    duracao!: string;
    prestador!: Prestador;
}

AlternativaPenal.init(
    {
        titulo: { type: Sequelize.STRING, allowNull: false },
        descricao: { type: Sequelize.STRING, allowNull: true },
        duracao: { type: Sequelize.STRING, allowNull: false }
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'alternativa_penal'
    }
);

export default AlternativaPenal;
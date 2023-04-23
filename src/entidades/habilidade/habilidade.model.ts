import Sequelize, { Model } from 'sequelize';

import database from '../../database/database';
import Prestador from '../prestador/prestador.model';

export class Habilidade extends Model {
    id!: number;
    instituicao!: string;
    observacao!: string;
    prestador!: Prestador;
}

Habilidade.init(
    {
        descricao: { type: Sequelize.STRING, allowNull: false },
        observacao: { type: Sequelize.STRING, allowNull: true },
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'curso'
    }
);

export default Habilidade;
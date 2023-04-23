import Sequelize, { Model } from 'sequelize';

import Prestador from '../../prestador.model';
import database from '../../../../database/database';


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
        tableName: 'habilidade'
    }
);

export default Habilidade;
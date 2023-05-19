import Sequelize, { Model } from 'sequelize';

import database from '../../../../database/database';
import Instituicao from '../../../instituicao/instituicao.model';


export class Pergunta extends Model {
    id!: number;
    pergunta!: string;
    ativo!: boolean;
    instituicao?: Instituicao;
}

Pergunta.init(
    {
        pergunta: { type: Sequelize.STRING, allowNull: false },
        ativo: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'pergunta'
    }
);

export default Pergunta;
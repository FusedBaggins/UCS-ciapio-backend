
import Sequelize, { Model } from 'sequelize';

import Prestador from '../../prestador.model';
import Pergunta from "../pergunta/pergunta.model";
import database from '../../../../database/database';

export class Resposta extends Model {
    id!: number;
    descricao!: string;
    pergunta!: Pergunta;
    prestador!: Prestador;
}

Resposta.init(
    {
        descricao: { type: Sequelize.STRING, allowNull: false }
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'resposta'
    }
);

Pergunta.belongsToMany(Prestador, {
    through: Resposta,
    foreignKey: 'perguntaId',
    as: 'perguntas'
});

Prestador.belongsToMany(Pergunta, {
    through: Resposta,
    foreignKey: 'prestadorId'
});

export default Resposta;
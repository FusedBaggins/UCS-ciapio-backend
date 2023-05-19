import Sequelize, { Model } from 'sequelize';
import database from '../../database/database';
import Instituicao from './instituicao.model';


class InstituicaoVinculo extends Model {
    id!: number;
    instituicaoPaiId!: number;
    instituicaoParceiraId!: number;
    instituicaoPai!: Instituicao;
    instituicaoParceira!: Instituicao;
}

InstituicaoVinculo.init(
    {

    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'instituicao_instituicao',
    }
);


InstituicaoVinculo.belongsTo(Instituicao, {
    as: 'instituicaoPai',
    foreignKey: 'instituicaoPaiId',
});

InstituicaoVinculo.belongsTo(Instituicao, {
    as: 'instituicaoParceira',
    foreignKey: 'instituicaoParceiraId',
});
export default InstituicaoVinculo;
import Sequelize, { DataTypes, Model } from 'sequelize';

import database from '../../database/database';
import Usuario from '../usuario/usuario.model';
import Perfil from '../../enums/perfil';


class PerfilPermissaoUsuario extends Model {
    id!: number;
    perfil!: number;
    usuario!: Usuario;
    usuarioId!: number;
}

PerfilPermissaoUsuario.init(
    {
        perfil: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'perfil_permissao_usuario',
    }
);

export default PerfilPermissaoUsuario;
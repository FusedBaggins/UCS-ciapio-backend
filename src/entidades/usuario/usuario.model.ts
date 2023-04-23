import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcryptjs';
import database from '../../database/database';
import PerfilPermissaoUsuario from '../perfil-permissao-usuario/perfil-permissao-usuario.model';
import AgendamentoPrestacao from '../agendamento-prestacao/agendamento-prestacao.model';

class Usuario extends Model {
    id!: number;
    nome!: string;
    usuario!: string;
    senha!: string;
    hash!: string;
    ativo!: boolean;
    administrador!: boolean;
    data_inativacao!: Date;
}

Usuario.init(
    {
        nome: { type: Sequelize.STRING, allowNull: false },
        usuario: { type: Sequelize.STRING, allowNull: false },
        senha: { type: Sequelize.STRING, allowNull: false },
        hash: { type: Sequelize.STRING, allowNull: false },
        ativo: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
        administrador: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
        data_inativacao: { type: Sequelize.DATE, allowNull: true }
    },
    {
        sequelize: database.connection,
        freezeTableName: true,
        tableName: 'usuario',
    }
);

Usuario.addHook('beforeSave', async (usuario: Usuario): Promise<void> => {
    if (usuario.senha)
        usuario.hash = await bcrypt.hash(usuario.senha, 8);
});


Usuario.hasMany(PerfilPermissaoUsuario, {
    foreignKey:'usuarioId',
    as: 'perfisPermissao'
});

Usuario.hasMany(AgendamentoPrestacao, {
    foreignKey:'usuarioId',
    as: 'usuario'
});

export default Usuario;
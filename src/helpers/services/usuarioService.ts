import PerfilPermissaoUsuario from "../../entidades/perfil-permissao-usuario/perfil-permissao-usuario.model";
import Usuario from "../../entidades/usuario/usuario.model";

class UsuarioService {
    static async getUsuarioByNome(nome: string) {
        return await Usuario.findOne({
            where: {
                usuario: nome
            }
        });
    }
    static async getById(id: string) {
        return await Usuario.findByPk(id);
    }

    static async getPerfilByUsuarioId(usuarioId: number) {
        return await PerfilPermissaoUsuario.findOne({
            where: {
                usuarioId
            }
        });
    }

    static async save(campos: Record<string, any>) {
        let entidade = await UsuarioService.getById(campos.id);
        if (entidade) {
            await entidade.update(campos);
        }
        else {
            entidade = Usuario.build(campos);
            await entidade.save();
        }
        return entidade;
    }
}

export default UsuarioService;
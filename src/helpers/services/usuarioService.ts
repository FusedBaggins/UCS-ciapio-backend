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
    static async getUsuarioById(id: string) {
        return await Usuario.findByPk(id);
    }

    static async getPerfilByUsuarioId(usuarioId: number) {
        return await PerfilPermissaoUsuario.findOne({
            where: {
                usuarioId
            }
        });
    }
}

export default UsuarioService;
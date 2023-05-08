import PerfilPermissaoUsuario from "../../entidades/perfil-permissao-usuario/perfil-permissao-usuario.model";
import Usuario from "../../entidades/usuario/usuario.model";

class PerfilPermissaoUsuarioService {
    static async getPerfilById(id: string) {
        return await PerfilPermissaoUsuario.findByPk(id);
    }
}

export default PerfilPermissaoUsuarioService;
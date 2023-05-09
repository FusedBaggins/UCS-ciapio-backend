import PerfilPermissaoUsuario from "../../entidades/perfil-permissao-usuario/perfil-permissao-usuario.model";

class PerfilPermissaoUsuarioService {
    static async getById(id: string) {
        return await PerfilPermissaoUsuario.findByPk(id);
    }
}

export default PerfilPermissaoUsuarioService;
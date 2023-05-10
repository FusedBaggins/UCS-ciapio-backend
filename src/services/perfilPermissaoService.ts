import PerfilPermissaoUsuario from "../entidades/perfil-permissao-usuario/perfil-permissao-usuario.model";
import BaseService from "./baseService";

class PerfilPermissaoUsuarioService extends BaseService<PerfilPermissaoUsuario> {
    constructor() {
      super(PerfilPermissaoUsuario);
    }
}

export default PerfilPermissaoUsuarioService;
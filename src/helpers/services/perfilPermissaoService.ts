import PerfilPermissaoUsuario from "../../entidades/perfil-permissao-usuario/perfil-permissao-usuario.model";

class PerfilPermissaoUsuarioService {
    static async getById(id: string) {
        return await PerfilPermissaoUsuario.findByPk(id);
    }

    static async save(campos: Record<string, any>) {
        let entidade = await PerfilPermissaoUsuarioService.getById(campos.id);
        if (entidade) {
            await entidade.update(campos);
        }
        else {
            entidade = PerfilPermissaoUsuario.build(campos);
            await entidade.save();
        }
        return entidade;
    }
}

export default PerfilPermissaoUsuarioService;
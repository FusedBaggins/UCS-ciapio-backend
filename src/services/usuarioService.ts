import { Model } from "sequelize";
import PerfilPermissaoUsuario from "../entidades/perfil-permissao-usuario/perfil-permissao-usuario.model";
import Usuario from "../entidades/usuario/usuario.model";
import BaseService from "./baseService";
import UsuarioValidate from "../helpers/validations/usuarioValidate";
import { AuthenticatedRequest } from "../..";
import PerfilPermissaoUsuarioService from "./perfilPermissaoService";

class UsuarioService extends BaseService<Usuario>{
    constructor() {
        super(Usuario);
    }

    static async getUsuarioByNome(nome: string) {
        return await Usuario.findOne({
            where: {
                usuario: nome
            }
        });
    }

    static async salvarComDependencias(campos: Record<string, any>) {
        const buildOptions: any = { exclude: ['perfisPermissao'] };
        const usuario = (await super.save(campos, buildOptions)) as Usuario;

        const permissoes = campos.perfisPermissao;
        if (Array.isArray(permissoes)) {
            for (const item of permissoes) {
                item.usuarioId = usuario.dataValues.id;
                await PerfilPermissaoUsuarioService.save(item);
            }
        }

        return { usuario, permissoes } ;
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
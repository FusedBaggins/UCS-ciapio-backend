import PerfilPermissaoUsuario from "../../../entidades/perfil-permissao-usuario/perfil-permissao-usuario.model";
import Usuario from "../../../entidades/usuario/usuario.model";
import { Request } from "express";
import PerfilPermissaoUsuarioService from "../../services/perfilPermissaoService";

const _mapPerfil = (permissao: PerfilPermissaoUsuario, item: any, usuario: Usuario | null) => {
    permissao!.perfil = item.perfil;
    if (usuario?.id) {
        permissao!.usuarioId = usuario.id;
    }
    permissao!.id = item.id;
    return permissao;
}

const toEntityPerfilPermissao = async (req: Request, usuario: Usuario | null) => {
    const perfilPermissaoArray = req.body.perfisPermissao;
    const listaPerfis: PerfilPermissaoUsuario[] = [];
    if (Array.isArray(perfilPermissaoArray)) {
        for (const item of perfilPermissaoArray) {
            let permissao: PerfilPermissaoUsuario | null;
            if (item.id) {
                permissao = await PerfilPermissaoUsuarioService.getById(item.id);
                if (permissao == null)
                    permissao = new PerfilPermissaoUsuario();
            }
            else {
                permissao = new PerfilPermissaoUsuario();
            }
            permissao = _mapPerfil(permissao, item, usuario);
            listaPerfis.push(permissao);
        }

        return listaPerfis;
    }
    return [];
};

export default toEntityPerfilPermissao;

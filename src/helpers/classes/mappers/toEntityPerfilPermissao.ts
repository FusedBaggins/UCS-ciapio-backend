import PerfilPermissaoUsuario from "../../../entidades/perfil-permissao-usuario/perfil-permissao-usuario.model";
import Usuario from "../../../entidades/usuario/usuario.model";
import { Request } from "express";

const toEntityPerfilPermissao = (req: Request, usuario: Usuario) => {
    const perfilPermissaoArray = req.body.perfisPermissao;
    if (Array.isArray(perfilPermissaoArray)) {
        const perfilPermissaoUsuarioList = perfilPermissaoArray?.map(
            (item: any) => PerfilPermissaoUsuario.build({
                perfil: item,
                usuarioId: usuario.id,
            }));

        return perfilPermissaoUsuarioList;
    }
    return [];
};

export default toEntityPerfilPermissao;

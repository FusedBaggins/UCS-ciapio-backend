import { AuthenticatedRequest } from "../..";
import aclRules from "../../acl-rules"
import Perfil from "../enums/perfil";
import mapperAclPermissao from "../helpers/mappers/mapperAclPermissao";
import { Response } from 'express';

class MenuService {
    static convertRulesToPermissoesUsuario(perfil: string) {

        if (perfil === Perfil[Perfil.Administrador]) {
            return aclRules.map((x) => {
                x.permissions
                .map(x => mapperAclPermissao.convertAclPermissao(x))
                .filter(x => x.action === "allow" && x.visivel == true)
            });
        }
        else {
            return aclRules.find(x => {
                return x.group == perfil
            })!.permissions
                .map(x => mapperAclPermissao.convertAclPermissao(x))
                .filter(x => x.action === "allow" && x.visivel == true);
        }
    }

    static async getMenu(req: AuthenticatedRequest, res: Response): Promise<any> {
        const perfil = req.user?.role || "";
        if (perfil) {
            let permissoesUsuario = MenuService.convertRulesToPermissoesUsuario(perfil);
            return res.status(200).json(permissoesUsuario);
        }
        return res.status(200).json([]);
    };
}

export default MenuService;
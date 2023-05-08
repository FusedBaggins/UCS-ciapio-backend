import { AuthenticatedRequest } from "../../..";
import aclRules from "../../../acl-rules"
import mapperAclPermissao from "../mappers/mapperAclPermissao";
import { Response } from 'express';

class MenuService {
    static convertRulesToPermissoesUsuario(perfil: string) {
        return aclRules.find(x => {
            return x.group == perfil
        })!.permissions
            .map(x => mapperAclPermissao.convertAclPermissao(x))
            .filter(x => x.action === "allow" && x.visivel == true);
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
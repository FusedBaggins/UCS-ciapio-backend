import aclRules from "../../../acl-rules"
import Perfil from "../../enums/perfil";
import mapperAclPermissao from "../mappers/mapperAclPermissao";
import { Request, Response } from 'express';

class Menu {
    static convertRulesToPermissoesUsuario(perfil: Perfil){
        return aclRules.find(x => {
            return x.group == perfil
        })!.permissions
            .map(x => mapperAclPermissao.convertAclPermissao(x))
            .filter(x => x.action === "allow" && x.visivel == true);
    }

    static async getMenu(req: Request, res: Response): Promise<any> {
        const perfil = req.session?.user?.role as Perfil;
        if (perfil) {
            let permissoesUsuario = Menu.convertRulesToPermissoesUsuario(perfil);
            return res.status(200).json(permissoesUsuario);
        }
        return res.status(200).json([]);
    };
}

export default Menu;
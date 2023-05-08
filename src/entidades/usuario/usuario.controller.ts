import { Request, Response } from "express";
import Usuario from "./usuario.model";
import toEntityUsuario from "../../helpers/classes/mappers/toEntityUsuario";
import toEntityPerfilPermissao from "../../helpers/classes/mappers/toEntityPerfilPermissao";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidades: Usuario[] = await Usuario.findAll();
        return res.status(200).json(entidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade: Usuario | null = await Usuario.findByPk(req.params.id);
        if (entidade)
            return res.status(200).json(entidade);

        return res.status(404).json({});
    },

    /**
     * @param {string} nome
     * @param {string} senha
     * @param {string} usuario 
     * @param {object} perfisPermissao
    */
    async save(req: Request, res: Response): Promise<any> {
        const usuario = await toEntityUsuario(req);

        await usuario.save();
        const permissoes = await toEntityPerfilPermissao(req, usuario);
        for (const item of permissoes) {
            await item.save();
        }

        req.login(usuario, () => {
            return res.status(200).json({
                id: usuario.id,
            });
        });
    },
}
import { Request, Response } from "express";
import Usuario from "./usuario.model";
import UsuarioService from "../../helpers/services/usuarioService";
import PerfilPermissaoUsuarioService from "../../helpers/services/perfilPermissaoService";

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
        try {
            const usuario = await UsuarioService.save(req.body);
            const permissoes = req.body.perfisPermissao;
            if (Array.isArray(permissoes)) {
                for (const item of permissoes) {
                    await PerfilPermissaoUsuarioService.save(item);
                }
            }

            req.login(usuario, () => {
                return res.status(200).json({
                    id: usuario.id,
                });
            });
        }
        catch (error) {
            console.error(error);
            return res.status(400).json(error);
        }
    },
}
import { Request, Response } from "express";
import Usuario from "./usuario.model";
import UsuarioService from "../../services/usuarioService";
import PerfilPermissaoUsuarioService from "../../services/perfilPermissaoService";
import { AuthenticatedRequest } from '../../../';
import UsuarioValidate from "../../helpers/validations/usuarioValidate";


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
    async save(req: Request, res: Response): Promise<any> {
        try {
            await UsuarioValidate.validarUsuario(req as AuthenticatedRequest);
            const { usuario } = await UsuarioService.salvarComDependencias(req.body);
          
            return res.status(200).json({
                id: usuario.id,
            });
        }
        catch (error) {
            console.error(error);
            return res.status(400).json(error);
        }
    },
}


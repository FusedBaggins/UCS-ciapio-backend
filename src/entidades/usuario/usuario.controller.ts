import { Request, Response } from "express";
import Usuario from "./usuario.model";
import UsuarioService from "../../services/usuarioService";
import { AuthenticatedRequest } from '../../../';
import UsuarioValidate from "../../helpers/validations/usuarioValidate";
import { Op } from "sequelize";

const _getListFilters = (req: Request) =>
({
    ...(req.query.id && { id: req.query.id }),
    ...(req.query.nome && {
        [Op.or]: [
            {
                nome: {
                    [Op.iLike]: `%${req.query.nome}%`
                }
            },
            {
                usuario: {
                    [Op.iLike]: `%${req.query.nome}%`
                }
            }
        ]
    })
});

export default {

    async list(req: AuthenticatedRequest, res: Response): Promise<any> {
        let entidades: Usuario[] = await Usuario.findAll({
            attributes: { exclude: ['senha', 'hash'] },
            where: {
                ..._getListFilters(req),
                instituicaoId: req?.user?.user.instituicaoId,
            },
        });
        return res.status(200).json(entidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade: Usuario | null = await Usuario.findByPk(req.params.id, {
            attributes: { exclude: ['senha', 'hash'] }
        });
        if (entidade)
            return res.status(200).json(entidade);

        return res.status(404).json({});
    },
    async save(req: AuthenticatedRequest, res: Response): Promise<any> {
        try {
            await UsuarioValidate.validarUsuario(req);
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

    async getUserLogged(req: AuthenticatedRequest, res: Response): Promise<any> {
        let user: any = req?.user?.user;
        const atributosRemover: string[] = ['senha', 'hash'];
        const role: any = req?.user?.role;
        atributosRemover?.forEach((atributo: string) => {
            delete user[atributo];
        });

        user = { user, role };
        return res.status(200).json(user);
    }
}


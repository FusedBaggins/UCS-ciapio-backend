import { Request, Response } from "express";
import Processo from "./processo.model";
import { AuthenticatedRequest } from "../../..";
import ProcessoService from "../../services/processoService";
import { Op } from "sequelize";

const _getListFilters = (req: Request) =>
({
    ...(req.query.nome && {
        nome: { [Op.iLike]: `%${req.query.nome}%` }
    }),
});

export default {
    async list(req: AuthenticatedRequest, res: Response): Promise<any> {

        let entidades: Processo[] = await Processo.findAll({
            where: {
                '$prestador.instituicaoId$': req.user?.user.instituicaoId,
                ..._getListFilters(req),
            },
        });
        return res.status(200).json(entidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade: Processo | null = await Processo.findByPk(req.params.id);
        if (entidade)
            return res.status(200).json(entidade);

        return res.status(404).json({});
    },
    async save(req: AuthenticatedRequest, res: Response): Promise<any> {
        try {
            const entidade = await ProcessoService.save(req.body);
            return res.status(200).json({
                id: entidade.id,
            });
        }
        catch (error) {
            console.error(error);
            return res.status(400).json(error);
        }
    },
}
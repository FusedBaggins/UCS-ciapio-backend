import { Request, Response } from "express";
import Visita from "./visita.model";
import { AuthenticatedRequest } from "../../..";
import VisitaService from "../../services/visitaService";
import EntidadeValidate from "../../helpers/validations/entidadeValidate";
import VisitaValidate from "../../helpers/validations/visitaValidate";
import { Op } from "sequelize";

const _getListFilters = (req: Request) =>
({
    ...(req.query.nome && {
        '$prestador.nome$': { [Op.iLike]: `%${req.query.nome}%` }
    }),
});

export default {
    async list(req: AuthenticatedRequest, res: Response): Promise<any> {

        let entidades: Visita[] = await Visita.findAll({
            where: {
                '$prestador.instituicaoId$': req.user?.user.instituicaoId,
                ..._getListFilters(req),
            },
            include: [
                'prestador',
            ],
        });
        return res.status(200).json(entidades);
    },

    async detail(req: AuthenticatedRequest, res: Response): Promise<any> {
        try {
            let entidade = await Visita.findByPk(req.params.id, {
                include: [
                    'instituicao',
                    'prestador',
                ]
            });
            if (entidade) {
                await VisitaValidate.validarVisitaDetail(entidade, req);
                return res.status(200).json(entidade);
            }
            return res.status(404).json({});
        }
        catch (error) {
            console.error(error);
            return res.status(400).json(error);
        }
    },

    async save(req: AuthenticatedRequest, res: Response): Promise<any> {
        try {
            if(req.body.status && req.body.status === '4'){
                req.body.dataAceite = Date.now;
            }
            const entidade = await VisitaService.save(req.body);
            return res.status(200).json({ id: entidade?.id });
        }
        catch (error) {
            console.error(error);
            return res.status(400).json(error);
        }
    },
}
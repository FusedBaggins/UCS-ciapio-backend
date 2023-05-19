import { Request, Response } from "express";
import Visita from "./visita.model";
import { AuthenticatedRequest } from "../../..";
import VisitaService from "../../services/visitaService";
import EntidadeValidate from "../../helpers/validations/entidadeValidate";

export default {
    async list(req: AuthenticatedRequest, res: Response): Promise<any> {

        let entidades: Visita[] = await Visita.findAll({
            where: {
                '$instituicaoId$': req.user?.user.instituicaoId,
            },
        });
        return res.status(200).json(entidades);
    },

    async detail(req: AuthenticatedRequest, res: Response): Promise<any> {
        try {
            let entidade = await Visita.findByPk(req.params.id);
            if (entidade) {
                EntidadeValidate.validarEntidadeDetail(entidade, req);
                return res.status(200).json(entidade);
            }
            return res.status(404).json({});
        }
        catch (error) {
            console.error(error);
            return res.status(400).json(error);
        }
    },

    async save(req: Request, res: Response): Promise<any> {
        try {
            const entidade = await VisitaService.save(req.body);
            return res.status(200).json({ id: entidade?.id });
        }
        catch (error) {
            console.error(error);
            return res.status(400).json(error);
        }
    },
}
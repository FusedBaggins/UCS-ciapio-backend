import { Request, Response } from "express";
import Pergunta from "./pergunta.model";
import PerguntaService from "../../../../services/perguntaService";
import { AuthenticatedRequest } from "../../../../..";
import EntidadeValidate from "../../../../helpers/validations/entidadeValidate";
import { Op } from "sequelize";

const _getListFilters = (req: Request) =>
({
    ...(req.query.pergunta && {
        pergunta: { [Op.iLike]: `%${req.query.pergunta}%` }
    }),
});

export default {
    async list(req: AuthenticatedRequest, res: Response): Promise<any> {

        let entidades: Pergunta[] = await Pergunta.findAll({
            where: {
                ..._getListFilters(req),
                instituicaoId: req?.user?.user.instituicaoId,
            }
        }); 
        return res.status(200).json(entidades);
    },

    async detail(req: AuthenticatedRequest, res: Response): Promise<any> {
        try {
            let entidade = await Pergunta.findByPk(req.params.id, {
                include: [
                    'instituicao'
                ]
            });

            if (entidade) {
                await EntidadeValidate.validarEntidadeDetail(entidade, req);
                delete entidade.instituicao;
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
            const objSave = {
                ...req.body,
                instituicaoId: req?.user?.user?.instituicaoId,
            }
            const entidade = await PerguntaService.save(objSave);
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
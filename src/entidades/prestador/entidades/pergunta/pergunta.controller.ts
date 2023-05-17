import { Request, Response } from "express";
import Pergunta from "./pergunta.model";
import PerguntaService from "../../../../services/perguntaService";
import { AuthenticatedRequest } from "../../../../..";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidades: Pergunta[] = await Pergunta.findAll();
        return res.status(200).json(entidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade: Pergunta | null = await Pergunta.findByPk(req.params.id);
        if (entidade)
            return res.status(200).json(entidade);

        return res.status(404).json({});
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
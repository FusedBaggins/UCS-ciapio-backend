import { Request, Response } from "express";
import Droga from "./droga.model";
import { AuthenticatedRequest } from "../../../../..";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidades = await Droga.findAll();
        return res.status(200).json(entidades);
    },

    async listSelect(req: AuthenticatedRequest, res: Response): Promise<any> {

        let entidades: Droga[] = await Droga.findAll();

        return res.status(200).json(entidades.map(entidade => ({
            id: entidade.id,
            label: entidade.nome
          })));
    },
    
    async detail(req: Request, res: Response): Promise<any> {
        let entidade = await Droga.findByPk(req.params.id);

        if (entidade)
            return res.status(200).json(entidade);

        return res.status(404).json({});
    },
}
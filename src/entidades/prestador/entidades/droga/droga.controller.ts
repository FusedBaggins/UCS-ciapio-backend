import { Request, Response } from "express";
import Droga from "./droga.model";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidades = await Droga.findAll();
        return res.status(200).json(entidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade = await Droga.findByPk(req.params.id);

        if (entidade)
            return res.status(200).json(entidade);

        return res.status(404).json({});
    },
}
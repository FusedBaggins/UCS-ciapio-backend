import { Request, Response } from "express";
import Cidade from "./cidade.model";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidades = await Cidade.findAll();
        return res.status(200).json(entidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade = await Cidade.findByPk(req.params.id);

        if (entidade)
            return res.status(200).json(entidade);

        return res.status(404).json({});
    },
    // create(req: Request, res: Response): any {
    //     return res.status(200).json({});
    // },
    // edit(req: Request, res: Response): any {
    //     return res.status(200).json({});
    // },
    // delete(req: Request, res: Response): any {
    //     return res.status(200).json({});
    // }
}
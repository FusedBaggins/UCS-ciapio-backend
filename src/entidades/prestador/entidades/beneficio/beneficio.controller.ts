import { Request, Response } from "express";

import Beneficio from "./beneficio.model";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidades: Beneficio[] = await Beneficio.findAll();
        return res.status(200).json(entidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade: Beneficio | null = await Beneficio.findByPk(req.params.id);
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
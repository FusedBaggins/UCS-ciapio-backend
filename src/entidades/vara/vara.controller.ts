import { Request, Response } from "express";
import Vara from "./vara.model";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidades: Vara[] = await Vara.findAll();
        return res.status(200).json(entidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade: Vara | null = await Vara.findByPk(req.params.id);
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
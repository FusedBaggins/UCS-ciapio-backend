import { Request, Response } from "express";
import Cidade from "./cidade.model";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let cidades = await Cidade.findAll();
        return res.status(200).json(cidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let cidade = await Cidade.findByPk(req.params.id);

        if (cidade)
            return res.status(200).json(cidade);

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
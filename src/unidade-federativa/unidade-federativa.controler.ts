import { Request, Response } from "express";
import UnidadeFederativa from "./unidade-federativa.model";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidadesFederativas = await UnidadeFederativa.findAll();
        return res.status(200).json(entidadesFederativas);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidadeFederativa = await UnidadeFederativa.findByPk(req.params.id);

        if (entidadeFederativa)
            return res.status(200).json(entidadeFederativa);

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
import { Request, Response } from "express";
import Instituicao from "./instituicao.model";
import TipoInstituicao from "../../enums/tipo-instituicao";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidades: Instituicao[] = await Instituicao.findAll();
        return res.status(200).json(entidades);
    },

    async listCIAP(req: Request, res: Response): Promise<any> {
        let entidade = await Instituicao.findAll({
            where: {
                tipo_instituicao: TipoInstituicao.Ciap,
            }
        });
        
        if (entidade)
            return res.status(200).json(entidade);
        return res.status(404).json({});
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade: Instituicao | null = await Instituicao.findByPk(req.params.id);
        if (entidade)
            return res.status(200).json(entidade);

        return res.status(404).json({});
    },
    async save(req: Request, res: Response): Promise<any> {
        const buildOptions:any = { exclude: ['endereco'] };
        const entidade = Instituicao.build(req.body, buildOptions);

        await entidade.save();
        return res.status(200).json({id: entidade.id});
    },
}
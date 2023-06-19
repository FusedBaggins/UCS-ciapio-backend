import { Request, Response } from "express";
import Cidade from "./cidade.model";
import { AuthenticatedRequest } from "../../..";

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

    async listSelect(req: AuthenticatedRequest, res: Response): Promise<any> {
        const tipo_instituicao: any = req.query?.tipo_instituicao;

        let entidade = await Cidade.findAll({
            where: {
                tipo_instituicao: tipo_instituicao || null
            }
        });

        if (entidade) {
            const instituicoes = entidade.map((entidade) => ({
                id: entidade.id,
                label: entidade.nome,
            }));

            return res.status(200).json(
                instituicoes
            );
        }
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
import { Request, Response } from "express";
import { AtestadoComparecimento } from "./atestado-comparecimento.model";
import { AuthenticatedRequest } from "../../..";
import AtestadoComparecimentoService from "../../services/atestadoComparecimento";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidades: AtestadoComparecimento[] = await AtestadoComparecimento.findAll();
        return res.status(200).json(entidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade: AtestadoComparecimento | null = await AtestadoComparecimento.findByPk(req.params.id);
        if (entidade)
            return res.status(200).json(entidade);

        return res.status(404).json({});
    },
    async save(req: AuthenticatedRequest, res: Response): Promise<any> {
        try {
            req.body.usuarioAtendimentoId = req?.user?.user.id;
            req.body.instituicaoId = req?.user?.user?.instituicaoId;
            const entidade = await AtestadoComparecimentoService.save(req.body);
               
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
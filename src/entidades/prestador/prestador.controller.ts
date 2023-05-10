import { Request, Response } from "express";
import Prestador from "./prestador.model";
import PrestadorService from "../../services/prestadorService";
import EnderecoService from "../../services/enderecoService";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidades: Prestador[] = await Prestador.findAll();
        return res.status(200).json(entidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade: Prestador | null = await Prestador.findByPk(req.params.id);
        if (entidade)
            return res.status(200).json(entidade);

        return res.status(404).json({});
    },
    async save(req: Request, res: Response): Promise<any> {
        try {
            const { entidade } = await PrestadorService.salvarComDependencias(req.body);
            req.login(entidade, () => {
                return res.status(200).json({
                    id: entidade.id,
                });
            });
        }
        catch (error) {
            console.error(error);
            return res.status(400).json(error);
        }
    },
}
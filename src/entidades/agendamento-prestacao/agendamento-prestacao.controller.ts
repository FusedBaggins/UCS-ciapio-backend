import { Request, Response } from "express";
import AgendamentoPrestacao from "./agendamento-prestacao.model";
import { AuthenticatedRequest } from "../../..";
import AgendamentoPrestacaoService from "../../services/agendamentoPrestacaoService";
import Prestador from "../prestador/prestador.model";
import Processo from "../processo/processo.model";
import AtestadoFrequencia from "../atestado-frequencia/atestado-frequencia.model";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidades = await Processo.findAll({
            include: [
                {
                    model: Prestador,
                    as: 'prestador',
                    attributes: ['nome', 'id'],
                },
            ],
            attributes: ['descricao_alternativa_penal', 'id'],
        });
        return res.status(200).json(entidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade: AgendamentoPrestacao | null = await AgendamentoPrestacao.findOne({
            where: {
                processoId: req.params.id,
            },
            include: [
                {
                    model: Processo,
                    as: 'processo',
                    include: [
                        {
                            model: Prestador,
                            as: 'prestador',
                            attributes: ['nome', 'id'],
                        },
                    ],
                    attributes: ['descricao_alternativa_penal', 'id'],
                },
                {
                    model: AtestadoFrequencia,
                    as: 'frequencias',
                },
            ],
        });
        if (entidade)
            return res.status(200).json(entidade);

        return res.status(404).json({});
    },
    async save(req: AuthenticatedRequest, res: Response): Promise<any> {
        try {
            const objSave = {
                ...req.body,
            }
            const { entidade } = await AgendamentoPrestacaoService.salvarComDependencias(objSave);
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
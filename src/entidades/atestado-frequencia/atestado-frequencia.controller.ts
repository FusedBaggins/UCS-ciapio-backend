import { Request, Response } from "express";
import { AtestadoFrequencia } from "./atestado-frequencia.model";
import Processo from "../processo/processo.model";
import { FrequenciaAgrupada } from "./view-model/frequencia-agrupada";
import Prestador from "../prestador/prestador.model";
import AtestadoFrequenciaService from "../../services/atestadoFrequenciaService";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidades: AtestadoFrequencia[] = await AtestadoFrequencia.findAll();


        return res.status(200).json(entidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade: AtestadoFrequencia | null = await AtestadoFrequencia.findByPk(req.params.id);
        if (entidade)
            return res.status(200).json(entidade);

        return res.status(404).json({});
    },

    async create(req: Request, res: Response): Promise<any> {
        try {
            const entidade = await AtestadoFrequenciaService.save(req.body);
            return res.status(200).json({
                id: entidade.id,
            });
        }
        catch (error) {
            console.error(error);
            return res.status(400).json(error);
        }
    },

    async listaAgrupadaPorProcesso(req: Request, res: Response): Promise<any> {

        let processos: Processo[] = await Processo.findAll(
            {
                include:
                    [
                        'atestadosFrequencia',
                        {
                            model: Prestador,
                            as: 'prestador',
                            attributes: ['nome'] // Carrega apenas o atributo 'nome' do prestador
                        }
                    ]
            }
        );
        return res.status(200).json(processos.map(p => new FrequenciaAgrupada(p.id, p.prestador, p.horas_cumprir, (p as any).atestadosFrequencia)));
    },

    async listaPorProcesso(req: Request, res: Response): Promise<any> {
        let processo: Processo | null = await Processo.findByPk(req.params.id, 
            {
                include:
                    [
                        'atestadosFrequencia',
                        {
                            model: Prestador,
                            as: 'prestador',
                            attributes: ['nome'] // Carrega apenas o atributo 'nome' do prestador
                        }
                    ]
            }
        );
        if (processo)
            return res.status(200).json(new FrequenciaAgrupada(processo.id, processo.prestador, processo.horas_cumprir, (processo as any).atestadosFrequencia));

        return res.status(204).json({});
    },

    // edit(req: Request, res: Response): any {
    //     return res.status(200).json({});
    // },
    // delete(req: Request, res: Response): any {
    //     return res.status(200).json({});
    // }
}
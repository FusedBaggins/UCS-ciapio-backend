import { Request, Response } from "express";
import AlternativaPenal from "./alternativa-penal.model";
import Prestador from "../../prestador.model";
import Processo from "../../../processo/processo.model";
import { AuthenticatedRequest } from "../../../../..";

export default {
    async list(req: Request, res: Response): Promise<any> {

        let entidades: AlternativaPenal[] = await AlternativaPenal.findAll({
            include: [
                {
                  model: Prestador,
                  as: 'prestador',
                  attributes: ['nome'] // Carrega apenas o atributo 'nome' do prestador
                }
              ]
        });
        return res.status(200).json(entidades);
    },

    async detail(req: Request, res: Response): Promise<any> {
        let entidade: AlternativaPenal | null = await AlternativaPenal.findByPk(req.params.id,  {
            include: [
                {
                  model: Prestador,
                  as: 'prestador',
                  attributes: ['nome'] // Carrega apenas o atributo 'nome' do prestador
                }
              ]
        });
        if (entidade)
            return res.status(200).json(entidade);

        return res.status(404).json({});
    },

    async getDescricaoAlternativaPenal(req: AuthenticatedRequest, res: Response): Promise<any> {
      try {
          const prestadorId = req.query.prestadorId;
          let processos = await Processo.findAll({
              where: {
                  prestadorId,
              }
          });

          if (processos && processos.length) {
              const processoId = req.query.prestador;

              let numeroAlternativaPenal = processos.length;
              if(processoId)
                  numeroAlternativaPenal++;

              const descricao_alternativa_penal = `Alternativa penal ${numeroAlternativaPenal}`;
              return res.status(200).json({ descricao_alternativa_penal });
          }

          return res.status(200).json({});
      }
      catch (error) {
          console.error(error);
          return res.status(400).json(error);
      }
  }
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
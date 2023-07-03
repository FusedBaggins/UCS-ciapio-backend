import { Request, Response } from "express";
import AlternativaPenal from "./alternativa-penal.model";
import Prestador from "../../prestador.model";
import Processo from "../../../processo/processo.model";
import { AuthenticatedRequest } from "../../../../..";
import AlternativaPenalService from "../../../../services/alternativaPenalService";

export default { 
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
}
import Prestador from "../entidades/prestador/prestador.model";
import alternativaPenalService from "./alternativaPenalService";
import BaseService from "./baseService";
import beneficioService from "./beneficioService";
import cursoService from "./cursoService";
import enderecoService from "./enderecoService";
import familiarService from "./familiarService";
import fichaMedicaService from "./fichaMedicaService";
import habilidadeService from "./habilidadeService";
import processoService from "./processoService";
import trabalhoService from "./trabalhoService";
import visitaService from "./visitaService";

class PrestadorService extends BaseService<Prestador> {
  constructor() {
    super(Prestador);
  }

  static async salvarComDependencias(campos: Record<string, any>) {
    let endereco = null;
    if (campos.endereco) {
      endereco = await enderecoService.save(campos.endereco);
      campos.endereco = endereco.id;
    }

    const entidade = await super.save(campos) as Prestador;
    
    await super.childListSave(
      campos.habilidades, 
      entidade.id, 
      "prestadorId", 
      (item: any) => {
        habilidadeService.save(item)
      }
    );

    await super.childListSave(
      campos.familiares, 
      entidade.id,
      "prestadorId", 
      (item: any) => {
        familiarService.save(item)
      }
    );

    await super.childListSave(
      campos.cursos, 
      entidade.id,
      "prestadorId", 
      (item: any) => {
        cursoService.save(item)
      }
    );

    await super.childListSave(
      campos.beneficios, 
      entidade.id,
      "prestadorId", 
      (item: any) => {
        beneficioService.save(item)
      }
    );

    await super.childListSave(
      campos.alternativasPenais, 
      entidade.id,
      "prestadorId", 
      (item: any) => {
        alternativaPenalService.save(item)
      }
    );

    await super.childListSave(
      campos.trabalhos, 
      entidade.id,
      "prestadorId", 
      (item: any) => {
        trabalhoService.save(item)
      }
    );

    await super.childListSave(
      campos.visitas, 
      entidade.id,
      "prestadorId", 
      (item: any) => {
        visitaService.save(item)
      }
    );

    await super.childListSave(
      campos.processos, 
      entidade.id,
      "prestadorId", 
      (item: any) => {
        processoService.save(item)
      }
    );
    
    await fichaMedicaService.save(campos.fichaMedica);

    return { entidade, endereco };
  }
}

export default PrestadorService;
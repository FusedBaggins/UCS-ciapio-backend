import Habilidade from "../entidades/prestador/entidades/habilidade/habilidade.model";
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
      campos.enderecoId = endereco.id;
    }

    const entidade = await super.save(campos) as Prestador;

    const habilidades = await super.childListSave(
      campos.habilidades,
      entidade.id,
      "prestadorId",
      (item: any) => habilidadeService.save(item)
    );

    const familiares = await super.childListSave(
      campos.familiares,
      entidade.id,
      "prestadorId",
      (item: any) => familiarService.save(item)
    );

    const cursos = await super.childListSave(
      campos.cursos,
      entidade.id,
      "prestadorId",
      (item: any) => cursoService.save(item)
    );

    const beneficios = await super.childListSave(
      campos.beneficios,
      entidade.id,
      "prestadorId",
      (item: any) => beneficioService.save(item)

    );

    const alternativasPenais = await super.childListSave(
      campos.alternativasPenais,
      entidade.id,
      "prestadorId",
      (item: any) => alternativaPenalService.save(item)
    );

    const trabalhos = await super.childListSave(
      campos.trabalhos,
      entidade.id,
      "prestadorId",
      (item: any) => trabalhoService.save(item)

    );

    const visitas = await super.childListSave(
      campos.visitas,
      entidade.id,
      "prestadorId",
      (item: any) => visitaService.save(item)

    );

    const processos = await super.childListSave(
      campos.processos,
      entidade.id,
      "prestadorId",
      (item: any) => processoService.save(item)
    );

    if (campos.fichaMedica)
      await fichaMedicaService.save(campos.fichaMedica);

    return {
      entidade,
      endereco,
      habilidades,
      familiares,
      trabalhos,
      cursos,
      visitas,
      processos,
      alternativasPenais,
      beneficios
    };
  }
}

export default PrestadorService;
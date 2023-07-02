import Deficiencia from "../entidades/prestador/entidades/deficiencia/deficiencia.model";
import Habilidade from "../entidades/prestador/entidades/habilidade/habilidade.model";
import Prestador from "../entidades/prestador/prestador.model";
import FichaMedicaView from "../interfaces/View/FichaMedicaView";
import alternativaPenalService from "./alternativaPenalService";
import AtestadoComparecimentoService from "./atestadoComparecimento";
import BaseService from "./baseService";
import beneficioService from "./beneficioService";
import cursoService from "./cursoService";
import deficienciaService from "./deficienciaService";
import drogaService from "./drogaService";
import enderecoService from "./enderecoService";
import familiarService from "./familiarService";
import fichaMedicaService from "./fichaMedicaService";
import habilidadeService from "./habilidadeService";
import processoService from "./processoService";
import respostaService from "./respostaService";
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

    const { entrevistaId, ...camposSemEntrevistaId } = campos;

    // Salve os campos sem o campo entrevistaId
    const entidade = await super.save(camposSemEntrevistaId) as Prestador;

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

    const respostas = await super.childListSave(
      campos.respostas.filter((x: any) => x.descricao),
      entidade.id,
      "prestadorId",
      (item: any) => {
        return respostaService.save(item, null, {
          perguntaId: item.perguntaId,
          prestadorId: item.prestadorId,
        });
      }
    );

    let ficha: FichaMedicaView = {
      deficiencias: [],
      usoDrogas: [],
      fichaMedica: {}
    };


    if (campos.fichaMedica) {
      campos.fichaMedica.prestadorId = entidade.id;
      ficha.fichaMedica = await fichaMedicaService.save(campos.fichaMedica);

      if (ficha.fichaMedica) {

        if (campos.fichaMedica.deficiencias) {
          ficha.deficiencias = await super.childListSave(
            campos.fichaMedica.deficiencias,
            ficha.fichaMedica.id,
            "fichaMedicaId",
            (item: any) => deficienciaService.save(item)
          );
        }

        if (campos.fichaMedica.usoDrogas) {
          ficha.usoDrogas = await super.childListSave(
            campos.fichaMedica.usoDrogas,
            ficha.fichaMedica.id,
            "fichaMedicaId",
            (item: any) => drogaService.save(item)
          );
        }
      }
    }

    if (entrevistaId) {
      const entrevista = await AtestadoComparecimentoService.getById(campos.entrevistaId);
      if (entrevista) {
        entrevista.prestadorId = entidade.id;
        await AtestadoComparecimentoService.save(entrevista);
      }
    }

    return {
      entidade,
      endereco,
      habilidades,
      familiares,
      trabalhos,
      cursos,
      visitas,
      alternativasPenais,
      beneficios,
      respostas,
      fichaMedica: ficha,
    };
  }
}

export default PrestadorService;
import AgendamentoPrestacao from "../entidades/agendamento-prestacao/agendamento-prestacao.model";
import AtestadoFrequencia from "../entidades/atestado-frequencia/atestado-frequencia.model";
import AtestadoFrequenciaService from "./atestadoFrequenciaService";
import BaseService from "./baseService";

class AgendamentoPrestacaoService extends BaseService<AgendamentoPrestacao> {
  constructor() {
    super(AgendamentoPrestacao);
  }

  static async salvarComDependencias(campos: Record<string, any>) {
    const entidade = await super.save(campos) as AgendamentoPrestacao;

    campos.frequencias.forEach((x: AtestadoFrequencia) => {
      x.processoId = entidade.processoId;
    });
    const frequencia = await super.childListSave(
      campos.frequencias,
      entidade.id,
      "agendamentoId",
      (item: any) => AtestadoFrequenciaService.save(item)
    );

    return { entidade, frequencia };
  }
}

export default AgendamentoPrestacaoService;

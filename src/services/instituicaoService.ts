import Instituicao from "../entidades/instituicao/instituicao.model";
import BaseService from "./baseService";
import enderecoService from "./enderecoService";

class InstituicaoService extends BaseService<Instituicao> {
  constructor() {
    super(Instituicao);
  }

  static async salvarComDependencias(campos: Record<string, any>) {
    let endereco = null;
    if (campos.endereco) {
      endereco = await enderecoService.save(campos.endereco);
      campos.enderecoId = endereco.id;
    }

    const entidade = await super.save(campos) as Instituicao;
    return { entidade, endereco }
  }
}

export default InstituicaoService;
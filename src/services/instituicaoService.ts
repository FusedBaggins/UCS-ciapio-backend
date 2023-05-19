import InstituicaoVinculo from "../entidades/instituicao/Instituicao-vinculo.model";
import Instituicao from "../entidades/instituicao/instituicao.model";
import Usuario from "../entidades/usuario/usuario.model";
import TipoInstituicao from "../enums/tipo-instituicao";
import BaseService from "./baseService";
import enderecoService from "./enderecoService";
import InstituicaoVinculoService from "./instituicaoVinculoService";

class InstituicaoService extends BaseService<Instituicao> {
  constructor() {
    super(Instituicao);
  }

  static async salvarComDependencias(campos: Record<string, any>, user: Usuario | undefined) {
    let endereco = null;
    if (campos.endereco) {
      endereco = await enderecoService.save(campos.endereco);
      campos.enderecoId = endereco.id;
    }

    const entidade = await super.save(campos) as Instituicao;
    if (entidade.id && TipoInstituicao.EntidadeParceira == campos.tipo_instituicao) {
      const vinculoExistente = await InstituicaoVinculo.findOne({
        where: {
          instituicaoPaiId: user?.instituicaoId,
          instituicaoParceiraId: entidade.id,
        }
      });

      if (!vinculoExistente) {
        InstituicaoVinculoService.save({
          instituicaoPaiId: user?.instituicaoId,
          instituicaoParceiraId: entidade.id,
        });
      }
    }

   
    return { entidade, endereco }
  }
}

export default InstituicaoService;
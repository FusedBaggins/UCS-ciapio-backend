import InstituicaoVinculo from "../entidades/instituicao/Instituicao-vinculo.model";
import BaseService from "./baseService";

class InstituicaoVinculoService extends BaseService<InstituicaoVinculo> {
    constructor() {
      super(InstituicaoVinculo);
    }
}

export default InstituicaoVinculoService;
import Instituicao from "../entidades/instituicao/instituicao.model";
import BaseService from "./baseService";

class InstituicaoService extends BaseService<Instituicao> {
    constructor() {
      super(Instituicao);
    }
}

export default InstituicaoService;
import AtestadoComparecimento from "../entidades/atestado-comparecimento/atestado-comparecimento.model";
import BaseService from "./baseService";

class AtestadoComparecimentoService extends BaseService<AtestadoComparecimento> {
    constructor() {
      super(AtestadoComparecimento);
    }
}

export default AtestadoComparecimentoService;
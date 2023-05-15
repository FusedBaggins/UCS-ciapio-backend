import Resposta from "../entidades/prestador/entidades/resposta/resposta.model";
import BaseService from "./baseService";

class RespostaService extends BaseService<Resposta> {
    constructor() {
      super(Resposta);
    }
}

export default RespostaService;
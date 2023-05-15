import Pergunta from "../entidades/prestador/entidades/pergunta/pergunta.model";
import BaseService from "./baseService";

class PerguntaService extends BaseService<Pergunta> {
    constructor() {
      super(Pergunta);
    }
}

export default PerguntaService;
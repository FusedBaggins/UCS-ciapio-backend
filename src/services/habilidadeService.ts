import Habilidade from "../entidades/prestador/entidades/habilidade/habilidade.model";
import BaseService from "./baseService";

class habilidadeService extends BaseService<Habilidade> {
    constructor() {
      super(Habilidade);
    }
}

export default habilidadeService;
import Cidade from "../entidades/cidade/cidade.model";
import BaseService from "./baseService";

class CidadeService extends BaseService<Cidade> {
    constructor() {
      super(Cidade);
    }
}

export default CidadeService;

import Trabalho from "../entidades/prestador/entidades/trabalho/trabalho.model";
import BaseService from "./baseService";

class TrabalhoService extends BaseService<Trabalho> {
    constructor() {
      super(Trabalho);
    }
}

export default TrabalhoService;
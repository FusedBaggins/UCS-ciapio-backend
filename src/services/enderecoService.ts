import Endereco from "../entidades/endereco/endereco.model";
import BaseService from "./baseService";

class EnderecoService extends BaseService<Endereco> {
    constructor() {
      super(Endereco);
    }
}

export default EnderecoService;
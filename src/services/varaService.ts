import BaseService from "./baseService";
import Vara from "../entidades/vara/vara.model";

class VaraService extends BaseService<Vara> {
    constructor() {
      super(Vara);
    }
}

export default VaraService;
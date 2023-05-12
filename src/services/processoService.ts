import Processo from "../entidades/processo/processo.model";
import BaseService from "./baseService";

class ProcessoService extends BaseService<Processo> {
    constructor() {
      super(Processo);
    }
}

export default ProcessoService;
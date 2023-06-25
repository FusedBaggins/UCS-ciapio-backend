import AtestadoFrequencia from "../entidades/atestado-frequencia/atestado-frequencia.model";
import BaseService from "./baseService";

class AtestadoFrequenciaService extends BaseService<AtestadoFrequencia> {
    constructor() {
      super(AtestadoFrequencia);
    }
}

export default AtestadoFrequenciaService;
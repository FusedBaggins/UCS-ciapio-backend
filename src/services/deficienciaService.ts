import Deficiencia from "../entidades/prestador/entidades/deficiencia/deficiencia.model";
import BaseService from "./baseService";

class DeficienciaService extends BaseService<Deficiencia> {
    constructor() {
      super(Deficiencia);
    }
}

export default DeficienciaService;

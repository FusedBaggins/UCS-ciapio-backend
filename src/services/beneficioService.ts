import Beneficio from "../entidades/prestador/entidades/beneficio/beneficio.model";
import BaseService from "./baseService";

class BeneficioService extends BaseService<Beneficio> {
    constructor() {
      super(Beneficio);
    }
}

export default BeneficioService;

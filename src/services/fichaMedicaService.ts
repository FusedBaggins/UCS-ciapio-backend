import FichaMedica from "../entidades/prestador/entidades/ficha-medica/ficha-medica.model";
import BaseService from "./baseService";

class FichaMedicaService extends BaseService<FichaMedica> {
    constructor() {
      super(FichaMedica);
    }
}

export default FichaMedicaService;
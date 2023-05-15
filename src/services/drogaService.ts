import Droga from "../entidades/prestador/entidades/droga/droga.model";
import UsoDroga from "../entidades/prestador/entidades/uso-droga/uso-droga.model";
import BaseService from "./baseService";

class DrogaService extends BaseService<UsoDroga> {
    constructor() {
      super(UsoDroga);
    }
}

export default DrogaService;

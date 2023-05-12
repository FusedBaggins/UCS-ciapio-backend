import Visita from "../entidades/visita/visita.model";
import BaseService from "./baseService";

class VisitaService extends BaseService<Visita> {
    constructor() {
      super(Visita);
    }
}

export default VisitaService;
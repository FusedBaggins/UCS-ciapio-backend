import Familiar from "../entidades/prestador/entidades/familiar/familiar.model";
import BaseService from "./baseService";

class FamiliarService extends BaseService<Familiar> {
    constructor() {
      super(Familiar);
    }
}

export default FamiliarService;

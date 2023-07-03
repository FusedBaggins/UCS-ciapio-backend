import AlternativaPenal from "../entidades/prestador/entidades/alternativa-penal/alternativa-penal.model";
import BaseService from "./baseService";

class AlternativaPenalService extends BaseService<AlternativaPenal> {
  constructor() {
    super(AlternativaPenal);
  }
}

export default AlternativaPenalService;

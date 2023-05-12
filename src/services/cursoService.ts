import Curso from "../entidades/prestador/entidades/curso/curso.model";
import BaseService from "./baseService";

class CursoService extends BaseService<Curso> {
    constructor() {
      super(Curso);
    }
}

export default CursoService;

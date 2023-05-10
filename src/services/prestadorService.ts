import Prestador from "../entidades/prestador/prestador.model";
import BaseService from "./baseService";
import EnderecoService from "./enderecoService";

class PrestadorService extends BaseService<Prestador> {
    constructor() {
      super(Prestador);
    }

    static async salvarComDependencias(campos: Record<string, any>) {      
      let endereco = null;
      if(campos.endereco){
        endereco = await EnderecoService.save(campos.endereco);
        campos.endereco = endereco.id;
      }
      
      const entidade = await super.save(campos) as  Prestador;


      return { entidade, endereco };
  }
}

export default PrestadorService;
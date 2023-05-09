import Instituicao from "../../entidades/instituicao/instituicao.model";

class InstituicaoService {
    static async getById(id: string) {
        return await Instituicao.findByPk(id);
    }
}

export default InstituicaoService;
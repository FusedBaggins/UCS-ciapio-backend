import Instituicao from "../../entidades/instituicao/instituicao.model";

class InstituicaoService {
    static async getById(id: string) {
        return await Instituicao.findByPk(id);
    }
    static async save(campos: Record<string, any>) {
        const buildOptions: any = { exclude: ['endereco'] };
        let entidade = await InstituicaoService.getById(campos.id);
        if (entidade) {
            await entidade.update(campos);
        }
        else {
            entidade = Instituicao.build(campos, buildOptions);
            await entidade.save();
        }
        return entidade;
    }
}

export default InstituicaoService;
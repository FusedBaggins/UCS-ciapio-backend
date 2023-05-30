import { AuthenticatedRequest } from "../../..";
import Instituicao from "../../entidades/instituicao/instituicao.model";
import Visita from "../../entidades/visita/visita.model";
import TipoInstituicao from "../../enums/tipo-instituicao";

class VisitaValidate {
    static async validarVisitaDetail(visita: Visita, req: AuthenticatedRequest): Promise<any> {

        const userLogado = req.user?.user;
        const instituicaoUser = await Instituicao.findByPk(userLogado?.instituicaoId)
        if (TipoInstituicao.Ciap == instituicaoUser?.tipo_instituicao) {
            if (instituicaoUser?.id !== visita.prestador.instituicaoId) {
                throw new DOMException("Não é possível acessar dados de um prestador vinculado a outra CIAP.");
            }
        }
        else {
            throw new DOMException("Não é possível acessar dados de uma entidade parceira sem estar em uma CIAP.");
        }
    }
}
export default VisitaValidate;
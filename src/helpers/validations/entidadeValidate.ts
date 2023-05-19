import { AuthenticatedRequest } from "../../..";

class EntidadeValidate {
    static async validarEntidadeDetail(entidade: any, req: AuthenticatedRequest): Promise<any> {
        const userLogado = req.user?.user;
        if (!userLogado || userLogado.instituicaoId !== entidade.instituicao?.id) {
            throw new DOMException("Não é possível acessar dados de outra instituição.");
        }
    }
}

export default EntidadeValidate;
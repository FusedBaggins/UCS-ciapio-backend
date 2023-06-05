import { AuthenticatedRequest } from "../../..";

class EntidadeValidate {
    static async validarEntidadeDetail(entidade: any, req: AuthenticatedRequest): Promise<any> {
        const userLogado = req.user?.user;
        if (!userLogado)
            throw new DOMException("User deslogado");

        if(!entidade.instituicao?.id)
            throw new DOMException("Não foi possível localizar a instituição da entidade.");
            
        if (userLogado.instituicaoId !== entidade.instituicao?.id) {
            console.log('Instituição user logado:', userLogado.instituicaoId)
            console.log('Instituição entidade:', entidade.instituicao?.id)
            throw new DOMException("Não é possível acessar dados de outra instituição.");
        }
    }
}

export default EntidadeValidate;
import { AuthenticatedRequest } from "../../..";
import InstituicaoVinculo from "../../entidades/instituicao/Instituicao-vinculo.model";
import Instituicao from "../../entidades/instituicao/instituicao.model";
import TipoInstituicao from "../../enums/tipo-instituicao";

class InstituicaoValidate {
    static async validarInstituicaoDetail(instituicao: Instituicao, req: AuthenticatedRequest): Promise<any> {
        
        const userLogado = req.user?.user;

        if(TipoInstituicao.EntidadeParceira == instituicao.tipo_instituicao){
            const vinculoInstituicao = await InstituicaoVinculo.findOne({
                where:{
                    instituicaoPaiId: userLogado?.instituicaoId,
                    instituicaoParceiraId: instituicao.id
                }
            });

            if(!vinculoInstituicao){
                throw new DOMException("Não é possível acessar dados de uma instituição que não é parceira.");
            }
        }
        else{
            if (!userLogado || userLogado.instituicaoId !== instituicao?.id) {
                throw new DOMException("Não é possível acessar dados de outra instituição.");
            }
        }
    }
}

export default InstituicaoValidate;
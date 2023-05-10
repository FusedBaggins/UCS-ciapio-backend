import { AuthenticatedRequest } from "../../..";
import Perfil from "../../enums/perfil";
import UsuarioService from "../../services/usuarioService";

class UsuarioValidate {
    static async validaInstituicao(req: AuthenticatedRequest): Promise<any>{
        if (req.body.id) {
            const usuario = await UsuarioService.getById(req.body.id);

            if (usuario) {
                const userLogado = req.user;
                if (!userLogado || usuario.instituicaoId !== userLogado.user.instituicaoId) {
                    if (req.user?.role !== Perfil[Perfil.Administrador]) {
                        throw new DOMException("Usuário sem permissão.");
                    }
                }
            }
        }
    }

    static async validarUsuario(req: AuthenticatedRequest): Promise<any>{
        await this.validaInstituicao(req);
    }
}

export default UsuarioValidate;
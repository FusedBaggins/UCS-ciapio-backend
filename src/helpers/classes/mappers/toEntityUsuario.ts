import Usuario from "../../../entidades/usuario/usuario.model";
import { Request } from "express";
import UsuarioService from "../../services/usuarioService";

const toEntityUsuario = async (req: Request) => {
    let usuario: Usuario | null;
    if (req.body.idUsuario) {
        usuario = await UsuarioService.getById(req.body.idUsuario);
        if (usuario == null)
            usuario = new Usuario();
    }
    else {
        usuario = new Usuario();
    }
    usuario.nome = req.body.nome;
    usuario.senha = req.body.senha;
    usuario.usuario = req.body.usuario;
    return usuario;
};

export default toEntityUsuario;

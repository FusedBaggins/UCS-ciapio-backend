import Usuario from "../../../entidades/usuario/usuario.model";
import { Request } from "express";

const toEntityUsuario = (req: Request, usuario: Usuario | null = null) => {
    if (usuario == null){
        usuario = new Usuario();
    }
    usuario.nome = req.body.nome;
    usuario.senha = req.body.senha;
    usuario.usuario = req.body.usuario;
    return usuario;
};

export default toEntityUsuario;

import { Request } from "express";
import Instituicao from "../../../entidades/instituicao/instituicao.model";
import InstituicaoService from "../../services/instituicaoService";

const toEntityInstituicao = async (req: Request) => {
    let instituicao: Instituicao | null;
    if (req.body.idInstituicao) {
        instituicao = await InstituicaoService.getById(req.body.idInstituicao);
        if (instituicao == null)
            instituicao = new Instituicao();
    }
    else {
        instituicao = new Instituicao();
    }
    instituicao.nome = req.body.nome;
    instituicao.cnpj = req.body.cnpj;
    instituicao.email = req.body.email;
    instituicao.telefone1 = req.body.telefone1;
    instituicao.telefone2 = req.body.telefone2;
    instituicao.tipo_instituicao = req.body.tipo_instituicao;
    instituicao.observacao = req.body.observacao;
    instituicao.data_credenciamento = req.body.data_credenciamento;
    instituicao.data_descredenciamento = req.body.data_descredenciamento;
    return instituicao;
};

export default toEntityInstituicao;
